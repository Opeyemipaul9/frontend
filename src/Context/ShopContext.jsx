import React, { createContext, useState } from 'react';
import all_product from '../ASSETS/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());



    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const i in cartItems) {
            if (cartItems[i] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(i))
                totalAmount += itemInfo.new_price * cartItems[i];
            }
            return totalAmount;
        }

    }

    const getTotalCartitems = () => {
        let totalitem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalitem += cartItems
            }
        }
        return totalitem;
    }


    const contextValue = { getTotalCartitems, getTotalCartAmount, all_product, cartItems, addToCart, removeCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;