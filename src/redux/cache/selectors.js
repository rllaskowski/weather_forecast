import { createSelector } from "reselect";
import { prop } from "ramda";
import { CACHE_REDUCER_NAME } from "./reducer";

const getCacheReducerState = prop(CACHE_REDUCER_NAME);

export const cacheSelector = createSelector(
    getCacheReducerState,
    cacheState => cacheState
);

