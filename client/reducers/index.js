import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import error from "./error";
import api from './api'
import news from './news'
import setting from './setting'

const rootReducer = combineReducers({
    form,
    error,
    api,
    news,
    setting

});

export default rootReducer;