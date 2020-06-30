import {
    TOGGLE_THEME,
    TOGGLE_FORECAST_TYPE,
    SELECT_CITY,
    SEARCH,
    Search
} from "./const";

export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME
    }
}

export const selectCity = city => {
    return {
        type: SELECT_CITY,
        city
    }
}

export const toggleForecastType = () => {
    return {
        type: TOGGLE_FORECAST_TYPE
    }
}


export const searchByCity = () => {
    return {
        type: SEARCH,
        searchType: Search.BY_CITY
    }
}

export const searchByGeo = () => {
    return {
        type: SEARCH,
        searchType: Search.BY_GEO
    }
}


