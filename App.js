import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TranstionScreen from "./screens/TranstionScreen";
import SearchScreen from "./screens/SearchScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Componet {
  render(){
    return(
      <AppContainer>

      </AppContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabeNavigator= createBottomTabNavigator({

  Transtion:{screen:TranstionScreen},
  Search:{screen:SearchScreen} 
})
const AppContainer= createAppContainer(TabNavigator)