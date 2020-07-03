import { fromJS } from "immutable";
import { CACHE_DATA } from "./const";

export const CACHE_REDUCER_NAME = "Cache";

const initialState = fromJS({});

export const cacheReducer = (state=initialState, action) => {
    switch (action.type) {
        case CACHE_DATA:
            return state
                .setIn([action.url], action.data);
        default:
            return state
    }
}

