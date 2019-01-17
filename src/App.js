import React, { Component, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReducerDemo from "./ReducerDemo";
import { UseStateExample } from "./UseStateExample";

const UseEffectDemo = React.lazy(() => import("./useEffectExample"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };
  }

  Selector = e => {
    this.setState({ selected: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <ReducerDemo />
        <UseStateExample />

        <Suspense fallback={<div>Loading...</div>}>
          <UseEffectDemo />
        </Suspense>
      </div>
    );
  }
}

export default App;
