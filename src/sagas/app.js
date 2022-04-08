import { APP } from '../actions/actionTypes';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { ROOT_OUTSIDE, ROOT_INSIDE, INTRO, appStart, setupIntro } from '../actions/app';
import { setUserToken, updateUserNotification } from '../actions/user';
import { getValue, saveValue } from '../lib/storage';
import { apiGet } from '../network/apiFetch';
import { signOut } from '../actions/login';

const init = function* init() {
    // return;
    let user_token = yield call(getValue, 'USER_TOKEN');
    // console.log(user_token);
    let user = yield call(getValue, 'USER');
    let first_time = yield call(getValue, 'FIRST_TIME');

    if (!first_time) yield call(saveValue, 'FIRST_TIME', '1');
    if (user_token) {
        try {
            // const res = yield call(apiGet, 'get_user');
            const res = yield call(apiGet, 'get_user', { 'Authorization': 'Bearer ' + user_token });
            if (res.status == 200) {
                yield all([
                    put(setUserToken({ user: res.data, user_token: user_token })),
                    put(appStart({ root: ROOT_INSIDE })),
                    put(setupIntro({ isFirstTime: first_time ? false : true })),
                    // put({ type: "FETCH_CONTINUOUSLY" }),
                    // put(updateUserNotification())
                ])
                saveValue('USER', JSON.stringify(res.data));
            } else {
                yield put(signOut())
            }
        } catch (e) {
            yield all([
                put(setUserToken({ user: JSON.parse(user), user_token: user_token })),
                put(appStart({ root: ROOT_INSIDE })),
                // put({ type: "FETCH_CONTINUOUSLY" }),
                // put(updateUserNotification())
            ]);
        }
    } else {
        yield all([
            put(appStart({ root: ROOT_OUTSIDE })),
            put(setupIntro({ isFirstTime: first_time ? false : true }))
        ])
    }
}

const root = function* root() {
    yield takeLatest(APP.INIT, init);
}

export default root;