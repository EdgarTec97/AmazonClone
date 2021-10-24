import React from 'react';
import {SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <Feather
          name="mic"
          size={20}
          style={{position: 'absolute', right: 60}}
        />
        <Feather
          name="camera"
          size={20}
          style={{position: 'absolute', right: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
