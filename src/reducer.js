import {
    FORECAST_REDUCER_NAME,
    forecastReducer
} from "./containers/forecast/reducer";
import {
    NAVIGATION_REDUCER_NAME,
    navigationReducer
} from "./containers/navigation/reducer";

import { combineReducers } from "redux";

const createReducer = () => {
    return combineReducers(
        {
            [NAVIGATION_REDUCER_NAME]: navigationReducer,
            [FORECAST_REDUCER_NAME]: forecastReducer
        }

    );
}

export default createReducer;
