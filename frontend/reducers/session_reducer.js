import {
    RECEIVE_CURRENT_USER,
} from '../api_utils/session_api_util';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        return {
            id: action.payload.id,
            //handle comes in the decoded playload? not certain
            coin: action.payload.coin,
            newsSource: action.payload.newsSource,
            exchange: action.payload.exchange
        };
        default:
           return state;
    }
}

export default sessionReducer;