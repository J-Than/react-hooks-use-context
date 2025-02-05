import React from "react";
import { ThemeProvider } from "./context/theme";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root"));
