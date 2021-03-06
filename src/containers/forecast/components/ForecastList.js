import React from "react";
import styled from "styled-components";
import DayForecastCard from "./DayForecastCard";
import HourForecastCard from "./HourForecastCard";

const ForecastListWrapper = styled.div`
    width: 50%;
    min-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const renderForecastList = (forecastList, isDaily, gifDict) => {
    return forecastList.map((forecast, index) =>
        <div key={index}>
            {isDaily ?
                <DayForecastCard
                    forecast={forecast}
                    gifDict={gifDict}
                /> :
                <HourForecastCard
                    forecast={forecast}
                    gifDict={gifDict}
                />
            }
        </div>
    )
}

const ForecastList = ({forecastList, isDaily, gifDict}) => {
    return (
        <ForecastListWrapper>
            {renderForecastList(forecastList, isDaily, gifDict)}
        </ForecastListWrapper>
    )
}

export default ForecastList;
