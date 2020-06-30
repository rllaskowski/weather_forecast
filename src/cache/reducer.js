import { fromJS } from "immutable";
import { FETCH_DATA, CACHE_DATA } from "./actions";

const initialState = fromJS({
    cache: {}
});

export const cacheReducer = (state=initialState, action) => {
    switch (action.type) {
        case CACHE_DATA:
            return state
                .setIn(['cache', action.url], action.data);
        default:
            return state
    }
}

