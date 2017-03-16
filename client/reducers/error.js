import * as types from "../constants";

const initState = {
    error: false,
    errorResult: {
        clientMessage: null,
        code: null
    }
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.SHOW_ERROR:
            return {...state, ...action.payload};

        case types.HIDE_ERROR:
            return {...state, error: false};
    }

    return state;
}