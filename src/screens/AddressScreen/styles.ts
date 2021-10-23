import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  contain: {
    height: 57,
  },
  picker: {
    backgroundColor: '#ebebeb',
  },
  pickerCap: {
    borderWidth: 1,
    borderColor: '#c2c2c2',
  },
  check: {fontSize: 16, marginTop: 5},
  errorLabel: {
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 10,
    backgroundColor: '#fccccc',
    borderLeftWidth: 4,
    borderColor: 'red',
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#f7c51b',
    borderColor: '#e3b510',
    height: 40,
    marginBottom: 20,
  },
});

export default styles;
