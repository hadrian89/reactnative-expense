import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './TabBarIcon';
import HomeScreen from '../Home/HomeScreen';
import RegistrationScreen from '../Registration/RegistrationScreen';
import LoginScreen from '../Login/LoginScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

LoginStack.path = '';

const RegistrationStack = createStackNavigator(
  {
    Registration: RegistrationScreen,
  },
  config
);

RegistrationStack.navigationOptions = {
  tabBarLabel: 'Registration',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

RegistrationStack.path = '';



const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
   HomeStack,
  LoginStack,
  RegistrationStack,
});

tabNavigator.path = '';

export default tabNavigator;

