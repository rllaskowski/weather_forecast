import React from "react";
import styled from "styled-components";
import Gif from "./Gif";

const ForecastCardWrapper = styled.div`
    width: 300px;
    height: 400px;
    background-color: #192D6A;
    margin: 20px 20px;
    color: white;
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
    font-size: 12px;
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
                {date.toDateString()}
            </DateWrapper>
            <HourWrapper>
                {toStringHour(date)}
            </HourWrapper>
            <div>
                { gif? <Gif src={gif}/> : null }
            </div>
            <div>
                {`temp: ${forecast.get("temp")}`}
            </div>
            <div>
                {`pressure: ${forecast.get("pressure")}`}
            </div>

        </ForecastCardWrapper>
    )
}

export default HourForecastCard;
