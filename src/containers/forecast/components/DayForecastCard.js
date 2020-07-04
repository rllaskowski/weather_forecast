import React from "react";
import styled from "styled-components";
import Gif from "./Gif";
import { theme } from "styled-tools";

const ForecastCardWrapper = styled.div`
    width: 300px;
    background-color: ${theme("colors.forecast")};
    margin: 20px 15px;
    color: white;
    padding-top: 20px;
`;
const DateWrapper = styled.div`
    width: 100%;
    padding: 20px auto;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
`

const GifWrapper = styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: center;
`;

const TemperatureWrapper = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
`;

const PressureWrapper = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
`;
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
            <GifWrapper>
                { gif? <Gif src={gif}/> : null }
            </GifWrapper>
            <PressureWrapper>
                {`${forecast.get("pressure")} hP`}
            </PressureWrapper>
            <TemperatureWrapper>
                {`Day: ${forecast.get("temp").get("day")} °C`}
            </TemperatureWrapper>
            <TemperatureWrapper>
                {`Night: ${forecast.get("temp").get("night")} °C`}
            </TemperatureWrapper>
        </ForecastCardWrapper>
    )
}

export default DayForecastCard;
