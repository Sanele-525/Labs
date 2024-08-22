import React, { useContext, useState } from 'react';  
import { View, Text, Image, Button, ScrollView} from 'react-native';  
import { SafeAreaView } from 'react-native-safe-area-context';
// import { CartContext } from './CartContex';

// const cartItem = useContext(CartContext)
const Menu = () => {  
    const [foodItems,setFoodItems] = useState([  
        {  id: '1',
           name: 'Pizza', 
           description: 'Delicious cheesy pizza', 
           price: 59.99, 
           image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg' 
          },  
        {  id: '2', 
          name: 'Burger',
          description: 'Beef burger', 
          price: 80.99, 
          image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg' 
      },  
        { id: '3', 
          name: 'Pasta', 
          description: 'Tasty beef', 
          price: 102.99, 
          image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg' 
      },  
        { id: '4', 
          name: 'Salad', 
          description: 'Fresh  Chicken', 
          price: 70.99, 
          image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg' 
      },  
      {   id: '5', 
          name: 'Sushi', 
          description: 'Sushi rolls', 
          price: 54.99, 
          image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg' 
      },  
      {   id: '6', 
          name: 'Tacos', 
          description: 'Creamy pasta', 
          price: 100.99, 
          image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg' 
      },  
      ]); 
  // const { addToCart } = useContext(CartContext);    
  return (  
    <SafeAreaView style={{flex:1,padding: 16,}}>
    <ScrollView>
        {foodItems.map((food,index) => {
            return(
                <View style={{flex:1, padding: 16,}} key={index}>
                    <Text style={{fontSize:18,fontWeight: 'bold',}}>{food.name}</Text>  
                    <Image source={{ uri: food.image }} style={{width:'100%', height:150,borderRadius:8,}}/>
                    <Text>{food.description}</Text> 
                    <Text style={{fontSize:16,color: 'green',}}> R{food.price} </Text>
                    <Button title="Add to Cart" onPress={() => 
                      addToCart(food)} />  
                </View>
            )
        })}
    </ScrollView>
    </SafeAreaView>  
  );  
};  

export default Menu;