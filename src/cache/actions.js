export const FETCH_DATA = "cache/FETCH";
export const CACHE_DATA = "cache/CACHE_DATA";

export const fetchData = (url, resolveAction, rejectAction) => {
    return {
        type: FETCH_DATA,
        url,
        resolveAction,
        rejectAction
    }
}

export const cacheData = (url, data) => {
    return {
        type: CACHE_DATA,
        url,
        data
    }
}
