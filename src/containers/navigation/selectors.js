import { createSelector } from "reselect";
import { NAVIGATION_REDUCER_NAME} from "./reducer";
import { prop } from "ramda";

const getNavReducerState = prop(NAVIGATION_REDUCER_NAME);

export const cityValueSelector = createSelector(
    getNavReducerState,
    navState => navState.get("selectedCity")
);

export const forecastTypeSelector = createSelector(
    getNavReducerState,
    navState => navState.get("forecastType")
);

export const themeSelector = createSelector(
    getNavReducerState,
    navState => navState.get("theme")
)
