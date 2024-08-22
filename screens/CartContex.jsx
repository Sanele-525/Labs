import React, { createContext, useState } from 'react';  
import CartScreen from './CartScreen';
import Menu from './MenuScreen';

export const CartContext = createContext();  

export const Cart = () => { 

    const [cartFood, setCartFood] = useState([]);  

    const addToCart = (food) => {  
        setCartFood(prevItems => [...prevItems, food]);  
    };  

    const removeFromCart = (name) => {  
        setCartFood(prevFood => prevFood.filter(item => item.name !== name));  
    };  

    const clearCart = () => {  
        setCartFood([]);  
    };  

    return (  
        <CartContext.Provider value={{ cartFood, addToCart, removeFromCart, clearCart }}>  
            <Menu/>
            <CartScreen/>
        </CartContext.Provider>  
    );  
};