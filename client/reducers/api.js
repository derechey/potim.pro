import * as types from "../constants";

const initialState = {
    api: null,
    lang: 'en'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.INIT_SERVER_RESPONSE:
            return {...state, api:action.payload};
        default:
            return state;
    }
}