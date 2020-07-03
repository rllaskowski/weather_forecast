import { fromJS } from "immutable";
import { SET_GIF_FOR_DESCRIPTION } from "./const";

export const GIF_REDUCER_NAME = "Gif";

const initialState = fromJS({});

export const gifReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_GIF_FOR_DESCRIPTION:
            return state
                .set(action.description, fromJS(action.gif));
        default:
            return state
    }
}

