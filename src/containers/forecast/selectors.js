import { createSelector } from "reselect";
import { prop } from "ramda";
import { FORECAST_REDUCER_NAME } from "./reducer";

const getForecastReducerState = prop(FORECAST_REDUCER_NAME);

export const forecastSelector = createSelector(
    getForecastReducerState,
    forecastState => forecastState.get("forecast")
);

export const isLoadingSelector = createSelector(
    getForecastReducerState,
    forecastState => forecastState.get("isLoading")
);




