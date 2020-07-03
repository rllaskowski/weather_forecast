import { get } from "axios";

const TENOR_API_KEY = "M1U8MF2EFO4R";

const getGifApiUrl = searchParams => {
    const description = searchParams.description;
    const position = searchParams.position;

    return `https://api.tenor.com/v1/search?`+
        `key=${TENOR_API_KEY}&q=${description}&`+
        `media_filter=minimal&limit=1&pos=${position}`;
}

export const getGif = async (searchParams, cache) => {
    const url = getGifApiUrl(searchParams);

    if (cache.has(url)) {
        return {
            gif: cache.get(url),
            url: url
        };
    }

    const response = await get(url);

    if (!response || !response.data) {
        return null;
    }

    return {
        gif: response.data,
        url: url
    };
}
