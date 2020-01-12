import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { testOutput } from "./dataTransform.ts";

testOutput();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
