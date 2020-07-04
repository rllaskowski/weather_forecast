import React from "react";
import styled from "styled-components";
import { forecastSelector, isLoadingSelector } from "./selectors";
import ForecastList from "./components/ForecastList";
import FetchingLoader from "./components/FetchingLoader";
import { useSelector } from "react-redux";
import { gifSelector } from "../../redux/gif/selectors";

const ForecastWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Forecast = () => {
    const isLoading = useSelector(isLoadingSelector);
    const forecast = useSelector(forecastSelector);
    const gifDict = useSelector(gifSelector);

    let forecastList = undefined;

    if (forecast) {
        forecastList = forecast.has("hourly")?
            forecast.get("hourly") : forecast.get("daily");
    }

    return (
        <ForecastWrapper>
            {isLoading? <FetchingLoader/>:
                forecastList?
                <ForecastList
                    forecastList={forecastList}
                    isDaily={forecast.has("daily")}
                    gifDict={gifDict}
                /> : null

            }
        </ForecastWrapper>
    );
}

export default Forecast;
