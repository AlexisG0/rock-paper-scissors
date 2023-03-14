import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { rpTheme } from "./utils/theme";
import store from "./utils/redux/store";

const rootElement: any = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider theme={rpTheme}>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </StyledEngineProvider>
  </ThemeProvider>
);
