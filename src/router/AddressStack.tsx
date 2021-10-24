import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderComponent from './HeaderComponent';
import AddressScren from '../screens/AddressScreen';

const Stack = createStackNavigator();

const AddressStack = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={AddressScren}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default AddressStack;
