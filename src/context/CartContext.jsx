import { createContext, useState } from 'react';
export const MiContexto = createContext({});

export default function CartContext({ children }) {
 
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some(x => x.id === id);
  }

  const addItem = (item, cant) => {
     const newItem = {...item, cant}
     if(isInCart(newItem.id))
     {
        console.log("agrego uno que existe;")
        const findProducto = cart.find(x => x.id === newItem.id)
        const productoIndex = cart.indexOf(findProducto);
        const arrayAux = [...cart];
        arrayAux[productoIndex].cant += cant;
        setCart(arrayAux);
     } else {
        setCart([...cart, newItem]);
     }
  }

  const emptyCart = () => {
    setCart([]);
  }
  const deleteItem = (id) => {
    return setCart(cart.filter(x => x.id !== id));
  }

  const getItemQty = () => {
    return cart.reduce((acc, x) => acc += x.cant, 0)
  }

  const getItemPrice = () => {
    return cart.reduce((acc, x) => acc += x.cant * x.price, 0)
  }

  return <MiContexto.Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</MiContexto.Provider>;
}