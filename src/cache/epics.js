import { Observable } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { FETCH_DATA } from "./actions";
import Axios from "axios";

export const fetchEpic = (action$, state$) => action$.pipe(
    ofType(FETCH_DATA),
    mergeMap(action => {
        const url = action.url;
        const cache = state$.value.api.cache;

        if (cache[url]) {
            const data = cache[url].data;

            return Observable.of(action.resolveAction(data));
        } else {
            return Observable.fromPromise(
                Axios.get(action.url)
                    .then(res => {

                    })
            )
        }
    })
);

