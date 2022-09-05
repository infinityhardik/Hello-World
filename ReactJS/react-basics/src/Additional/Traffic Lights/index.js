import React from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./Additional/Traffic Lights/TrafficLight";
import './Additional/Traffic Lights/styles.css'

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      <TrafficLight initialValue={1} />
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
