import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import devToolsEnhancer from "remote-redux-devtools";

import Navigator from "./Navigator";
import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer());

export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
