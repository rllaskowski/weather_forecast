import { GET_GIF_FOR_DESCRIPTION } from "./const";
import { SET_GIF_FOR_DESCRIPTION } from "./const";


export const getGifForDescription = (description, position) => {
    return {
        type: GET_GIF_FOR_DESCRIPTION,
        description,
        position
    }
}

export const setGifForDescription = (description, gif) => {
    return {
        type: SET_GIF_FOR_DESCRIPTION,
        description,
        gif
    }
}
