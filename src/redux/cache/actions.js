export const CACHE_DATA = "cache/CACHE_DATA";

export const cacheData = (url, data) => {
    return {
        type: CACHE_DATA,
        url,
        data
    }
}
