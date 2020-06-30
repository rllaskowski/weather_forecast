import {
    SEARCH,
    Theme,
    TOGGLE_THEME,
    ForecastType,
    SELECT_CITY
} from "./const";
import { fromJS } from "immutable";

export const NAVIGATION_REDUCER_NAME = "Navigation";

const initialState = fromJS({
    selectedCity: null,
    forecastType: ForecastType.SHORT,
    theme: Theme.LIGHT,
});

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.updateIn(['theme'], theme => (
                theme === Theme.LIGHT? Theme.DARK : Theme.LIGHT
            ));
        case SELECT_CITY:
            return state.updateIn(['selectedCity'], () => action.city);
        case SEARCH:
            return state.updateIn(['searchType'], () => action.searchType)
        default:
            return state
    }
}
