import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form_1 from './forms/Personal';
import Form_2 from './forms/Address';
import Form_3 from './forms/Payment';


const Stack = createNativeStackNavigator()

function StackForm() {
    return(
      <Stack.Navigator>
        <Stack.Screen name='Personal' component={Form_1}/>
        <Stack.Screen name='Address' component={Form_2}/>
        <Stack.Screen name='Payment' component={Form_3}/>
      </Stack.Navigator>
    )
  }
  export default StackForm

const styles = StyleSheet.create({})