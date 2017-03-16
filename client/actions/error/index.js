import * as types from "../../constants";

export function showError(err) {
    return {
        type: types.SHOW_ERROR,
        payload: {error: true, errorResult: err}
    }
}

export function hideError() {
    return {
        type: types.HIDE_ERROR,
        payload: {error: false, errorResult: null}
    }
}