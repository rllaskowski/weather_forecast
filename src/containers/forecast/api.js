import { get } from "axios";
import { ForecastType } from "../navigation/const";
import { ForecastSearch } from "./const";
import { cityDict } from "../../constant";

const OWM_API_KEY = "93039e1fb1ea888ea45e60e0c295d9f3";

const coordsToParam = coords => {
    return `lat=${coords.lat}&lon=${coords.lon}`;
}

const getPosition = () => {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(
                {
                    lon: position.coords.longitude,
                    lat: position.coords.latitude
                })
        )
    });
}

export const getApiUrl = async (searchParams) => {
    const coords = searchParams.searchType === ForecastSearch.BY_CITY?
        cityDict[searchParams.city] : (await getPosition());

    const loc = coordsToParam(coords);

    const exclude = searchParams.forecastDuration === ForecastType.LONG?
        "hourly,current" : "daily,current"

    return `https://api.openweathermap.org/data/2.5/onecall?&${loc}&exclude=${exclude}&appid=${OWM_API_KEY}&units=metric`;
}

export const getForecast = async (searchParams, cache) => {
    const url = await getApiUrl(searchParams);

    if (cache.has(url)) {
        return {
            forecast: cache.get(url),
            url: url
        };
    }

    const response = await get(url);
    if (!response || !response.data) {
        return null;
    }

    return {
        forecast: response.data,
        url: url
    };
}
