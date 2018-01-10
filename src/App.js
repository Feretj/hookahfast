import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import devToolsEnhancer from "remote-redux-devtools";

import Navigator from "./Navigator";
import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer());

/* eslint-disable */
// Enable debugging network calls from inside Chrome Dev Tools.
// http://www.preslav.me/2017/03/26/debugging-network-calls-in-react-native-using-the-chrome-debugger/
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;
/* eslint-enable */

// Ignore yellow box notification about slowliness if the debugger isn't open
// in the browser.
console.ignoredYellowBox = ["Remote debugger"];

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
