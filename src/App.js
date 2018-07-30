import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Translator from "./component/Translator";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Translator />
        </div>
      </Provider>
    );
  }
}

export default App;
