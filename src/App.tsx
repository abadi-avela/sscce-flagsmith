import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createFlagsmithInstance } from "flagsmith";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flagsmith = createFlagsmithInstance();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
