import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Tab = createBottomTabNavigator();

const ButtomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={HomeScreen} name="Profile" />
      <Tab.Screen component={ShoppingCartScreen} name="ShoppingCart" />
      <Tab.Screen component={HomeScreen} name="more" />
    </Tab.Navigator>
  );
};

export default ButtomTabNav;
