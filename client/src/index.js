// BOOTSTRAP file - begins the React process - 

import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<App />, document.getElementById("root"));
registerServiceWorker();
