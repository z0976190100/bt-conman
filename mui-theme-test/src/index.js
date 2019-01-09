import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core/styles/index";

const theme = createMuiTheme({
    palette: {
        type: "light",
        background: {
            default: "#ffcc00"
        },
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#37474f',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#9d46ff',
            dark: '#0a00b6',
            main: '#6200ea',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        }
    }

});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
