import React from "react";
import styled from "styled-components";
import Gif from "./Gif";

const ForecastCardWrapper = styled.div`
    width: 800px;
`;

const DayForecastCard = ({forecast, gifDict}) => {
    const weather = forecast.get("weather").get(0).get("description");

    const gif = gifDict.has(weather) ?
        gifDict.get(weather).get("url") : undefined;

    return (
        <ForecastCardWrapper>
            date: {new Date(forecast.get("dt")*1000).toDateString()}

            { gif? <Gif src={gif}/> : null }

        </ForecastCardWrapper>
    )
}

export default DayForecastCard;
