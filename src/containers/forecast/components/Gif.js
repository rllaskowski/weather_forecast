import React from "react";
import styled from "styled-components";

const GifWrapper = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

const Gif = ({src}) => {
    return (
        <GifWrapper src={src}/>
    )
}

export default Gif;
