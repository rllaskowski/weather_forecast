import React from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";
import { GlobalStyle } from "../../global-styles";
import Navigation from "../navigation";
import Forecast from "../forecast";
import { useSelector } from "react-redux";
import { themeSelector } from "../navigation/selectors";
import {Theme} from "../navigation/const";

const App = () => {
    const themeType = useSelector(themeSelector);

    const theme = themeType === Theme.DARK? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                <Navigation/>
                <Forecast/>

        </ThemeProvider>
    );
}

export default App;
