import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
    forecastSelector,
    isLoadingSelector
} from "./selectors";
import ForecastList from "./components/ForecastList";
import FetchingLoader from "./components/FetchingLoader";
import { useSelector } from "react-redux";
import { gifSelector } from "../../redux/gif/selectors";

const ForecastWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
 
`;

const Forecast = props => {
    const {
        isLoading,
        forecast
    } = props;

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

const mapStateToProps = state => {
    return {
        forecast: forecastSelector(state),
        isLoading: isLoadingSelector(state)
    }
}

export default connect(mapStateToProps)(Forecast);
