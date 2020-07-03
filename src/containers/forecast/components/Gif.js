import React from "react";
import styled from "styled-components";

const GifWrapper = styled.img`
    max-height: 300px;
    max-width: 300px;
`;

const Gif = ({src}) => {
    return (
        <GifWrapper src={src}/>
    )
}

export default Gif;
