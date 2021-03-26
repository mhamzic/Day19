// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// add the following code below this line

class App extends React.Component {
  render() {
    // change code below this line
    const world = "World";
    // change code above this line
    return (
      <div className="App">
        <h1>{world}</h1>
      </div>
    );
  }
}

// add the following code below this line
ReactDOM.render(<App />, document.getElementById("root"));
