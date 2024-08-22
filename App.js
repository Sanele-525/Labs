import { Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Manu from './screens/MenuScreen';
import Profile from './screens/Profile';
import Cart from './screens/CartScreen';
import Personal from './screens/forms/Personal';
import Form from './screens/Form';
import Address from './screens/forms/Address';
import Payment from './screens/forms/Payment';

const Stack = createNativeStackNavigator()
function StackForm() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='form' component={Form}/>
      <Stack.Screen name='Personal' component={Personal}/>
      <Stack.Screen name='Address' component={Address}/>
      <Stack.Screen name='Payment' component={Payment}/>
      <Stack.Screen name='Profile' component={Profile}/>
      
    </Stack.Navigator>
  )
}

const TabsNavigation = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>

      <TabsNavigation.Navigator screenOptions={{
          tabBarLabelStyle: {  
          fontSize: 20, 
          color:'purple', 
          paddingBottom: 5,  
          },
        headerShown:false
      }}>
        <TabsNavigation.Screen name='Manu' component={Manu}/>
        <TabsNavigation.Screen name='Cart' component={Cart}/>
        <TabsNavigation.Screen name='Profile' component={Profile}/>
        <TabsNavigation.Screen name='Form' component={StackForm}/>
      </TabsNavigation.Navigator>

    </NavigationContainer>
  )
}
export default App

