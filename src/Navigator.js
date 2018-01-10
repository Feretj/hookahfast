import React from "react";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { connect } from "react-redux";

import LoginScreen from "./components/LoginScreen";

const AppNavigator = StackNavigator({ Login: { screen: LoginScreen } });

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams("Login"));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const Navigator = () => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigator);
