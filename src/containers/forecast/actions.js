export const DISPLAY_FORECAST = "DISPLAY_FORECAST";
export const DISPLAY_LOADER = "DISPLAY_LOADER";

export const displayForecast = forecast => {
    return {
        type: DISPLAY_FORECAST,
        forecast
    }
}

export const displayLoader = () => {
    return {
        type: DISPLAY_LOADER
    }
}
