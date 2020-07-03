import React from "react";
import styled from "styled-components";
import Gif from "./Gif";
import { theme } from "styled-tools";

const ForecastCardWrapper = styled.div`
    width: 300px;
    height: 400px;
    background-color: ${theme("colors.forecast")};
    margin: 20px 20px;
    color: white;
`;

const DateWrapper = styled.div`
    width: 100%;
    padding: 20px auto;
    text-align: center;
    font-size: 20px;
`


const DayForecastCard = ({forecast, gifDict}) => {
    const weather = forecast.get("weather").get(0).get("description");

    const gif = gifDict.has(weather) ?
        gifDict.get(weather).get("url") : undefined;

    const date = new Date(forecast.get("dt")*1000);

    return (
        <ForecastCardWrapper>
            <DateWrapper>
                {date.toDateString()}
            </DateWrapper>

            { gif? <Gif src={gif}/> : null }

        </ForecastCardWrapper>
    )
}

export default DayForecastCard;
