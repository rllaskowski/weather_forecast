import { ofType } from "redux-observable";
import { concatMap, map, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { getGif } from "./api";
import { cacheSelector } from "../cache/selectors";
import { cacheData } from "../cache/actions";
import { setGifForDescription } from "./actions";
import { GET_GIF_FOR_DESCRIPTION } from "./const";

const getGifsEpic = (action$, state$) => action$.pipe(
    ofType(GET_GIF_FOR_DESCRIPTION),
    map(action => ({
        description: action.description,
        position: action.position
    })),
    concatMap(searchParams =>
        from(getGif(searchParams, cacheSelector(state$.value)))
            .pipe(mergeMap(res => [
                    cacheData(res.url, res.gif),
                    setGifForDescription(searchParams.description, res.gif.results[0].media[0].gif)
                ])
            )
    )
)

export default getGifsEpic;
