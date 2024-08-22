// src/Form3Screen.js  
import React, { useState } from 'react';  
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';  
// import { UserContext } from './ContextForms';

const Form3 = ({ navigation,setUserInfo }) => {  
  // const { setUserInfo } = useUserContext();  
  const [card, setCard] = useState('');  
  const [expiry, setExpiry] = useState('');  
  const [cvv, setCvv] = useState('');  

  const validation = () => {  
    if (!card || !expiry || !cvv) {  
      Alert.alert('Missing', 'Please enter all fields');  
      return false;  
    }  
    return true;  
  };  
  const onSubmit = () => {  
    if (validation()) {  
      Alert.alert('', 'successfully submitted', [{  
        text: 'Go To Profile', 
        onPress: () => navigation.navigate('Profile')  
      }]); 
    }  
  };  
  return (  
    <View style={{flex:1,padding:30,}}>  
      <TextInput placeholder="Credit Card Number" keyboardType="numeric" onChangeText={setCard} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}} />  
      <TextInput placeholder="Expiry (MM/YY)" onChangeText={setExpiry} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}} />  
      <TextInput placeholder="CVV" keyboardType="numeric" onChangeText={setCvv} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}} />  
      <Button title="Submit" onPress={onSubmit} />  
    </View>  
  );  
};  
export default Form3;