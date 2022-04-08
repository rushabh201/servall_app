import { AUTH } from '../actions/actionTypes';
import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import { appStart, ROOT_INSIDE, ROOT_OUTSIDE, setupIntro } from '../actions/app';
import { loginSuccess, loginError } from '../actions/login';
import { setUserToken, updateUserNotification } from '../actions/user';
import { getValue, saveValue, removeValue } from '../lib/storage';
import { apiPost } from '../network/apiFetch';

const login = function* login({ data }) {
    try {
        // console.log(data);
        const res = yield call(apiPost, 'login', data);
        // console.log(res.data[0]);
        if (res.status == 200) {
            console.log(res);
            yield all([
                put(setUserToken({
                    user: res.data.user,
                    user_token: res.data.access_token
                })),
                put(loginSuccess()),
                put(appStart({ root: ROOT_INSIDE })),
                // put(updateUserNotification())
            ]);
            saveValue('USER', JSON.stringify(res.data.user));
            saveValue('USER_TOKEN', res.data.access_token);
        } else {
            yield put(loginError(res.data))
        }
    } catch (e) {
        console.log(e.message);
        yield put(loginError({ message: e.message }))
    }
}

const signOut = function* signOut() {
	// let user = JSON.parse(yield call(getValue, 'USER'));
	// saveValue('last_login_id', user.email.trim());
    removeValue('USER');
    removeValue('USER_TOKEN');
    yield all([
        put(setupIntro({ isFirstTime: false })),
        put(appStart({ root: ROOT_OUTSIDE }))
    ]);
}

const deleteAccount = function* deleteAccount() {
    try {
        // const userToken = yield select(state => state.user.userToken);
        const res = yield call(apiPost, 'delete_user', {}, { 'Authorization': 'Bearer ' + userToken });
        if (res.status === 200) {
            yield call(signOut);
        }
    } catch (e) {
        console.log(e);
    }
}

const root = function* root() {
    yield takeLatest(AUTH.LOGIN, login);
    yield takeLatest(AUTH.SIGN_OUT, signOut);
    yield takeLatest(AUTH.DELETE_ACCOUNT, deleteAccount);
}

export default root;