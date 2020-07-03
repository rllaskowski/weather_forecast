import { fromJS } from "immutable";
import { DISPLAY_FORECAST, GET_FORECAST, DISPLAY_ERROR, SWITCH_GIFS } from "./const";

export const FORECAST_REDUCER_NAME = "Forecast";

const initialState = fromJS({
    forecast: null,
    isLoading: false,
    error: false,
    gifIdx: 0
});

export const forecastReducer = (state=initialState, action) => {
    switch (action.type) {
        case DISPLAY_FORECAST:
            return state
                .set("isLoading", false)
                .set("forecast", fromJS(action.forecast))
                .set("error", false)
                .set("gifIdx", 0)
        case DISPLAY_ERROR:
            return state.set("error", true);
        case GET_FORECAST:
            return state
                .set("isLoading", true)
                .set("error", false)
        case SWITCH_GIFS:
            return state
                .update("gifIdx", idx => (idx+1)%5)
        default:
            return state
    }
}


