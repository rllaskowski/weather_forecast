import React from 'react';
import AutocompleteSelect from "./components/AutocompleteSelect";
import Button from "./components/Button";
import Switch from "./components/Switch";
import styled from "styled-components";
import {
    selectCity,
    toggleForecastType,
    toggleTheme
} from "./actions";
import {
    cityValueSelector,
    forecastTypeSelector,
    themeSelector
} from "./selectors";

import {ForecastType, Theme} from "./const";
import {
    getCityForecast,
    getGeoForecast
} from "../forecast/actions";
import {
    useDispatch,
    useSelector
} from "react-redux";

import { cityList } from "../../constant";

const NavigationWrapper = styled.div`
    background-color: #24292E;
    height: 80px;
`;

const Navigation = () => {
    const selectedCity = useSelector(cityValueSelector);
    const theme = useSelector(themeSelector);
    const forecastType = useSelector(forecastTypeSelector);

    const dispatch = useDispatch();

    const onCityChange = city => {
        dispatch(selectCity(city));
    };

    const onForecastTypeToggle = () => {
        dispatch(toggleForecastType());
    }

    const onCitySearch = () => {
        if (selectedCity) {
            dispatch(getCityForecast());
        }
    }

    const onGeoSearch = () => {
        dispatch(getGeoForecast());
    }

    const onThemeToggle = () => {
        dispatch(toggleTheme());
    }

    const isDarkTheme = (theme === Theme.DARK);
    const isLongForecast = (forecastType === ForecastType.LONG);
    const citySearchDisabled = !selectedCity;

    return (
        <NavigationWrapper>
            <AutocompleteSelect
                itemList={cityList}
                value={selectedCity}
                onSelect={onCityChange}
            />
            <Switch
                onToggle={onForecastTypeToggle}
                isOn={isLongForecast}
            />
            <Button
                text={"Search by city"}
                onClick={onCitySearch}
                disabled={citySearchDisabled}
            />
            <Button
                text={"Search by localization"}
                onClick={onGeoSearch}
            />
            <Switch
                onToggle={onThemeToggle}
                isOn={isDarkTheme}
            />
        </NavigationWrapper>
    );
}

export default Navigation;
