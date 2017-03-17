import {SERVER_API} from "../../config";
import * as types from '../../constants'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response);
        error.response = response;
        throw {error, response}
    }
}

function parseJSON(response) {
    return response.json()
}

export function getApi(config) {
    return dispatch => {
        fetch(`${SERVER_API}/api`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Application': 'hackaton',
                'Service': 'blog',
                'Module': '',
                'Version': '1',
                'Server': 'test'
            }
        }).then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                dispatch({
                    type: types.INIT_SERVER_RESPONSE,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
}


