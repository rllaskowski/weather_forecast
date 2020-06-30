import React from 'react';
import AutocompleteSelect from "./components/AutocompleteSelect";
import Button from "./components/Button";
import Switch from "./components/Switch";
import styled from "styled-components";
import { connect } from "react-redux";
import {
    searchByCity,
    selectCity,
    toggleForecastType,
    toggleTheme
} from "./actions";
import {
    cityValueSelector,
    forecastTypeSelector,
    themeSelector
} from "./selectors";
import { searchByGeo } from "./actions";
import {ForecastType, Theme} from "./const";

const NavigationWrapper = styled.div`
    background-color: red;
`;

const Navigation = props => {
    const {
        cityList,
        selectedCity,
        theme,
        forecastType,
        onCityChange,
        onCitySearch,
        onGeoSearch,
        onThemeToggle,
        onForecastTypeToggle
    } = props;

    const isDarkTheme = (theme === Theme.DARK);
    const isLongForecast = (forecastType === ForecastType.LONG);
    return (
        <NavigationWrapper>
            <AutocompleteSelect
                valueList={cityList}
                value={selectedCity}
                onChange={onCityChange}
            />
            <Switch onToggle={onForecastTypeToggle} isOn={isLongForecast}/>
            <Button text={"Szukaj po mieście"} onClick={onCitySearch}/>
            <Button text={"Szukaj po lokalizacji"} onClick={onGeoSearch}/>
            <Switch onToggle={onThemeToggle} isOn={isDarkTheme}/>
        </NavigationWrapper>
    );

}

const mapStateToProps = state => {
    return {
        selectedCity: cityValueSelector(state),
        forecastType: forecastTypeSelector(state),
        theme: themeSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCityChange: city => {
            dispatch(selectCity(city));
        },
        onCitySearch: () => {
            dispatch(searchByCity());
        },
        onGeoSearch: () => {
            dispatch(searchByGeo());
        },
        onThemeToggle: () => {
            dispatch(toggleTheme())
        },
        onForecastTypeToggle: () => {
            dispatch(toggleForecastType())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
