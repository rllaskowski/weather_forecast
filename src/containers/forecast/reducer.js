import { fromJS } from "immutable";

export const FORECAST_REDUCER_NAME = "Forecast";

const initialState = fromJS({
    forecast: null,
    isLoading: false
});

export const forecastReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


