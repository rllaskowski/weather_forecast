import {
    SEARCH,
    Theme,
    TOGGLE_THEME,
    ForecastType,
    SELECT_CITY, TOGGLE_FORECAST_TYPE
} from "./const";
import { fromJS } from "immutable";

export const NAVIGATION_REDUCER_NAME = "Navigation";

const initialState = fromJS({
    selectedCity: undefined,
    forecastType: ForecastType.SHORT,
    theme: Theme.LIGHT,
});

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.updateIn(['theme'], theme => (
                theme === Theme.LIGHT? Theme.DARK : Theme.LIGHT
            ));
        case TOGGLE_FORECAST_TYPE:
            return state.updateIn(['forecastType'], theme => (
                theme === ForecastType.LONG?
                    ForecastType.SHORT : ForecastType.LONG
            ));
        case SELECT_CITY:
            return state.updateIn(['selectedCity'], () => action.city);
        default:
            return state
    }
}
