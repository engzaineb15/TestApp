import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const authStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    // initialRouteName: 'Signup',
    headerMode: 'none',
  },
);

const mainAppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator({
    authStack: authStack,
    mainAppStack: mainAppStack,
  }),
);
