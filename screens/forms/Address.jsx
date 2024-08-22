// src/Form2Screen.js  
import React, { useState } from 'react';  
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';  
// import { UserContext } from './ContextForms';

const Form2 = ({ navigation,setUserInfo }) => {  
  // const { setUserInfo } = useUserContext();  
  const [address, setAddress] = useState('');  
  const [city, setCity] = useState('');  
  const [state, setState] = useState('');  
  const [zip, setZip] = useState('');  

  const validateInput = () => {  
    if (!address || !city || !state || !zip) {  
      Alert.alert('Error', 'Please enter all fields');  
      return false;  
    }  
    return true;  
  };  
  const nextForm = () => {  
    if (validateInput()) {  
      navigation.navigate('Payment');  
    }  
  };  
  return (  
    <View style={{flex:1,padding:30,}}>  
      <TextInput placeholder="Address" value={address} onChangeText={setAddress}style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}}  />  
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}}  />  
      <TextInput placeholder="State" value={state} onChangeText={setState} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}}  />  
      <TextInput placeholder="Zip Code" value={zip} keyboardType="numeric" onChangeText={setZip} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}}  />  
      <Button title="Next" onPress={nextForm} />  
    </View>  
  );  
};  
export default Form2;