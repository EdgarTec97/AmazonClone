import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import contryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';
import {useWindowDimensions} from 'react-native';

const countries = contryList.getData();

const AddressScren = () => {
  const windowWidth = useWindowDimensions().width;

  const [country, setCountry] = useState<string>(countries[0].code);
  const [fullname, setFullname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [addressError, setAddressError] = useState<string>('');
  const [optionalAddress, setOptionalAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>(countries[0].code);
  const [zipCode, setZipCode] = useState<string>('');

  const onCheckout = () => {
    if (!!addressError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }
    if (
      !fullname ||
      !phone ||
      !address ||
      !optionalAddress ||
      !city ||
      !zipCode
    ) {
      Alert.alert('Please fill all the fields');
      setAddressError('Invalid address');
      return;
    }
    console.warn('Success. Checkout');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <View style={styles.pickerCap}>
            <Picker
              style={styles.picker}
              selectedValue={country}
              onValueChange={itemValue => setCountry(itemValue)}>
              {countries.map((country, index) => (
                <Picker.Item
                  value={country.code}
                  label={country.name}
                  key={index}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            placeholder="55 555 5555"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Street address or P.O. Box"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Apt, Suite, Unit, Building (optional)"
            value={optionalAddress}
            onChangeText={setOptionalAddress}
          />
        </View>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View
          style={[
            styles.row,
            {width: windowWidth, padding: 10, flexDirection: 'row'},
          ]}>
          {/* State */}
          <View
            style={[
              styles.row,
              {width: windowWidth / 2 - 10, paddingRight: 5, marginLeft: -10},
            ]}>
            <Text style={styles.label}>State</Text>
            <View style={[styles.pickerCap, {marginTop: 5}]}>
              <Picker
                style={styles.picker}
                selectedValue={state}
                onValueChange={itemValue => setState(itemValue)}>
                {countries.map((country, index) => (
                  <Picker.Item
                    value={country.code}
                    label={country.name}
                    key={index}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Zip code */}
          <View
            style={[styles.row, {width: windowWidth / 2 - 10, paddingLeft: 5}]}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={[styles.input, styles.contain]}
              placeholder="0"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
        </View>

        <View style={[styles.row, {flexDirection: 'row', marginTop: -10}]}>
          <CheckBox disabled={false} value={false} />
          <Text style={styles.check}>Make this my default address</Text>
        </View>

        <Button
          text="Use this address"
          containerStyles={styles.button}
          onPress={onCheckout}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScren;
