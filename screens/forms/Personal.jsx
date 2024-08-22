// src/Form1Screen.js  
import React, { useState } from 'react';  
import { View, TextInput, Button, Alert } from 'react-native';  

const Form1 = ({ navigation,setUserInfo }) => { 
     const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  

  const validation = () => {  
    if (!name || !email || !phone) {  
      Alert.alert('Missing', 'Please enter all fields');  
      return false;  
    }  
    return true;  
  };  

  const nextForm = () => {  
    if (validation()) {  
      navigation.navigate('Address');  
    }  
  };  
  return (  
    <View style={{flex:1,padding:30,}}>  
      <TextInput placeholder="enter your name" onChangeText={setName} style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}} />  
      <TextInput placeholder="Enter your email" onChangeText={setEmail} keyboardType="email-address" style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}}/>  
      <TextInput placeholder="Enter your phone" onChangeText={setPhone} keyboardType="phone-pad" style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginVertical: 10,
        padding: 10}} />  
      <Button title="Next" onPress={nextForm} />  
    </View>  
  );  
};  
export default Form1;