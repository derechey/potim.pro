import * as types from "../constants";

const initialState = {
    setting: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_SETTING:
            return {...state, ...action.payload};
        default:
            return state;
    }
}