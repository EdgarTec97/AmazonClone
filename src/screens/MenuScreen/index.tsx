import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MenuScreen = () => {
  const onLogout = () => {
    console.warn('Method no implemented');
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onLogout}>
        <LinearGradient
          colors={['#ff9478', '#ff3500', '#821b00']}
          style={styles.linearGradient}>
          <Text style={styles.text}>Sign out</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    height: 60,
    width: 160,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  linearGradient: {
    height: 60,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
});

export default MenuScreen;
