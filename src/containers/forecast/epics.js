import { combineEpics, ofType } from "redux-observable";
import { DISPLAY_FORECAST, GET_FORECAST, SWITCH_GIFS } from "./const";
import { displayError, displayForecast, } from "./actions";
import { switchMap, map, mergeMap, concatMap, delay } from "rxjs/operators";
import { from, of } from "rxjs";
import { cityValueSelector, forecastTypeSelector } from "../navigation/selectors";
import { getForecast } from "./api";
import { cacheSelector} from "../../redux/cache/selectors";
import { cacheData } from "../../redux/cache/actions";
import { forecastSelector, gifIdxSelector } from "./selectors";
import { getGifForDescription } from "../../redux/gif/actions";
import { switchGifs } from "./actions";

const getWeatherList = (forecast) => {
    const forecastList = forecast.get("daily")?
        forecast.get("daily") : forecast.get("hourly");

    return [...new Set(forecastList.map(
        forecast => forecast.get("weather").get(0).get("description"))
    )]
}

const getForecastEpic = (action$, state$) => action$.pipe(
    ofType(GET_FORECAST),
    map(action => ({
        searchType: action.searchType,
        city: cityValueSelector(state$.value),
        forecastDuration: forecastTypeSelector(state$.value)
    })),
    switchMap(searchParams =>
        from(getForecast(searchParams, cacheSelector(state$.value)))
            .pipe(mergeMap(res => res? [
                    cacheData(res.url, res.forecast),
                    displayForecast(res.forecast)
                ] : displayError()))
    )
);

const getGifsEpic = (action$, state$) => action$.pipe(
    ofType(SWITCH_GIFS, DISPLAY_FORECAST),
    concatMap(() => getWeatherList(forecastSelector(state$.value))
        .map(description => getGifForDescription(description, gifIdxSelector(state$.value)))
    )
)

const switchGifsEpic = (action$, state$) => action$.pipe(
    ofType(SWITCH_GIFS, DISPLAY_FORECAST),
    switchMap(()=>of(switchGifs()).pipe(delay(30000)))
)

export default combineEpics(getForecastEpic, getGifsEpic, switchGifsEpic);
