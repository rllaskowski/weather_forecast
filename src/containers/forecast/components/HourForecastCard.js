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
`

const HourWrapper = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
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

const GifWrapper = styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: center;
`;

const toStringHour = date => {
    const hour = `${date.getHours < 10? "0": ""}${date.getHours()}`;
    const minutes = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;

    return `${hour}:${minutes}`;
}

const HourForecastCard = ({forecast, gifDict}) => {
    const weather = forecast.get("weather").get(0).get("description");

    const gif = gifDict.has(weather) ?
        gifDict.get(weather).get("url") : undefined;

    const date = new Date(forecast.get("dt")*1000);

    return (
        <ForecastCardWrapper>
            <DateWrapper>
                <div>{date.toDateString()}</div>
            </DateWrapper>
            <HourWrapper>
                {toStringHour(date)}
            </HourWrapper>
            <GifWrapper>
                { gif? <Gif src={gif}/> : null }
            </GifWrapper>
            <TemperatureWrapper>
                {`${forecast.get("temp")} °C`}
            </TemperatureWrapper>
            <PressureWrapper>
                {`${forecast.get("pressure")} hP`}
            </PressureWrapper>

        </ForecastCardWrapper>
    )
}

export default HourForecastCard;
