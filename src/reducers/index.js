import { combineReducers } from "redux";
import app from './app';
import login from './login';
import user from './user';
import users from './users';

export default combineReducers({
    app,
    login,
    user,
    users,
})