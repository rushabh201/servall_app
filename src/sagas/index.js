import { all } from 'redux-saga/effects';
import app from './app';
import login from './login';
import users from './users';

const root = function* root() {
    yield all([
        app(),
        login(),
        // users(),
    ])
}

export default root;