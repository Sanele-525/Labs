// src/ProfileScreen.js  
import React, { useContext, useState } from 'react';  
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';  
import { UserContext } from './forms/ContextForms';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfileScreen = () => {  
  // const { userInfo } = useContext(UserContext);   

  return (  
    <SafeAreaView style={{flex:1,padding:20,}}>  
      <Text style={{fontWeight:'bold', fontSize:25}}>Profile </Text>  
      <View style={{backgroundColor:'lightgray', padding:10, marginVertical:10, paddingVertical:5, gap:10, borderRadius:10}}>  
        <Text >Name: </Text>  
        <Text >Email: </Text>  
        <Text>Phone: </Text>  
      </View>  
      <View style={{backgroundColor:'lightgray', padding:10, marginVertical:10, paddingVertical:5, gap:10, borderRadius:10}}>  
        <Text >Address:</Text>  
        <Text>City:</Text>  
        <Text>State: </Text>  
        <Text>Zip:</Text>  
      </View>  
      <View  style={{backgroundColor:'lightgray', padding:10, marginVertical:10, paddingVertical:5, gap:10, borderRadius:10}} >  
        <Text >Credit Card: </Text>  
        <Text >Expiry: </Text>  
        <Text >CVV: </Text>  
      </View>   
    </SafeAreaView>  
  );  
};   

export default ProfileScreen;