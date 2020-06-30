import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
    forecastSelector,
    isLoadingSelector
} from "./selectors";

const ForecastWrapper = styled.div`
`;

const Forecast = props => {
    const {
        isLoading,
        forecast
    } = props;

    return (
        <ForecastWrapper>
            {isLoading? null: null

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
