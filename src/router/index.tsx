import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtomTabNav from './buttomTabNav';

const Root = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen component={ButtomTabNav} name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
