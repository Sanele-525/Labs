import React, { useContext } from 'react';  
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';  
import { CartContext } from './CartContex';

const CartScreen = () => {  
    // const { cartFood, removeFromCart, clearCart } = useContext(CartContext);  
     
    return (  
        <View>  
          {cartFood.map((food) => {
            return(
            <View>  
                <Text>{food.name}</Text>  
                <Text>${food.price}</Text>  
                <TouchableOpacity onPress={() => removeFromCart(food.id)}>  
                    <Text>Remove</Text>  
                </TouchableOpacity>  
            </View>
            )
          })} 
            <Button title="Checkout" onPress={() => {clearCart()}} />  
        </View>  
    );  
};  

export default CartScreen;