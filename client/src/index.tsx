import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import Api from "containers/Api";
import Events from "containers/Events";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto Mono"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={5} dense>
      <Events.Provider>
        <Api.Provider>
          <App />
        </Api.Provider>
      </Events.Provider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
