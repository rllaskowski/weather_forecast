import React from "react";
import styled from "styled-components";
import ForecastCard from "./ForecastCard";

const ForecastListWrapper = styled.ul`
`;

const renderForecastList = ({forecastList}) => {
    return forecastList.map((forecast, index) => (
        <li key={index}>
            <ForecastCard forecast={forecast}/>
        </li>
    ))
}

const ForecastList = ({forecastList}) => {
    return (
        <ForecastListWrapper>
            {renderForecastList(forecastList)}
        </ForecastListWrapper>
    )
}

export default ForecastList;
