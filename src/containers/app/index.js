import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes";
import { GlobalStyle } from "../../global-styles";
import Navigation from "../navigation";
import Forecast from "../forecast";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                <Navigation/>
                <Forecast/>

        </ThemeProvider>
    );
}

export default App;
