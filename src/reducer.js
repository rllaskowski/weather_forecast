import {
    FORECAST_REDUCER_NAME,
    forecastReducer
} from "./containers/forecast/reducer";
import {
    NAVIGATION_REDUCER_NAME,
    navigationReducer
} from "./containers/navigation/reducer";
import {
    CACHE_REDUCER_NAME,
    cacheReducer
} from "./redux/cache/reducer";
import { combineReducers } from "redux";
import {
    GIF_REDUCER_NAME,
    gifReducer
} from "./redux/gif/reducer";

const createReducer = () => {
    return combineReducers(
        {
            [NAVIGATION_REDUCER_NAME]: navigationReducer,
            [FORECAST_REDUCER_NAME]: forecastReducer,
            [CACHE_REDUCER_NAME]: cacheReducer,
            [GIF_REDUCER_NAME]: gifReducer
        }
    );
}

export default createReducer;
