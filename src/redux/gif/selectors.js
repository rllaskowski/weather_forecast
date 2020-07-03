import { createSelector } from "reselect";
import { prop } from "ramda";
import { GIF_REDUCER_NAME } from "./reducer";

const getGifReducerState = prop(GIF_REDUCER_NAME);

export const gifSelector = createSelector(
    getGifReducerState,
    gifState => gifState
)

