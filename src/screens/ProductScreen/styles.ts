import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {
    color: '#696969',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  picker: {backgroundColor: '#ededed'},
  auxButton: {
    marginBottom: 30,
  },
  pickerCap: {
    borderWidth: 1,
    borderColor: '#c2c2c2',
  },
});

export default styles;
