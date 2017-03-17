import * as types from "../constants";

const initialState = {
    news: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_NEWS:
            return {...state, news: action.payload};
        default:
            return state;
    }
}