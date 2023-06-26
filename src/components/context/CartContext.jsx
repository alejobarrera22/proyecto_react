import { createContext } from "react";
import { useState } from "react";
//import { isInputElement } from "react-router-dom/dist/dom";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            let pos = cart.findIndex(product => product.id === item.id);
            cart[pos].quantity += quantity; 
            setCart([...cart]);
        } else{
            setCart([...cart, {...item, quantity:quantity}])
        }
    };

    const removeItem = (id) =>{
        const items = cart.filter(product => product.id !== id); 
        setCart([...items]);
    };

    const clear = () =>{
        setCart([]);
    };

    const isInCart = (id) =>{
        return cart.some(product => product.id === id);
    };

    return(
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;