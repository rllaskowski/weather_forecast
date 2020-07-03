import { CACHE_DATA } from "./const";

export const cacheData = (url, data) => {
    return {
        type: CACHE_DATA,
        url,
        data
    }
}
