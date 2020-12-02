import React,{Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-native'
import SignupLoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default function App(){
    return(
      <SignupLoginScreen/>
    );
}

const switchNavigator=createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  ExchangeScreen: {screen: ExchangeScreen}
})

const AppContainer=createAppContainer(switchNavigator);