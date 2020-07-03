import {
    GET_FORECAST, DISPLAY_FORECAST, ForecastSearch, DISPLAY_ERROR, SWITCH_GIFS
} from "./const";

export const displayForecast = forecast => {
    return {
        type: DISPLAY_FORECAST,
        forecast
    }
}

export const getGeoForecast = () => {
    return {
        type: GET_FORECAST,
        searchType: ForecastSearch.BY_GEO
    }
}

export const getCityForecast = () => {
    return {
        type: GET_FORECAST,
        searchType: ForecastSearch.BY_CITY
    }
}

export const displayError = () => {
    return {
        type: DISPLAY_ERROR
    }
}

export const switchGifs = () => {
    return {
        type: SWITCH_GIFS
    }
}
