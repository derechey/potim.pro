import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import error from "./error";


const rootReducer = combineReducers({
    form,
    error

});

export default rootReducer;