import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppState from "./AppState";
import { StateHookTest } from "./StateHookTest";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppState />
            </div>
        );
    }
}

export default App;
