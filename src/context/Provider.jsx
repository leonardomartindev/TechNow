import { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartIsOpen, setCartOpen] = useState(false);
    const [popupItem, setPopupItem] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [descriptionProduct, setDescription] = useState("");
  
    const value = {
      products,
      setProducts,
      loading,
      setLoading,
      cartItems,
      setCartItems,
      cartIsOpen,
      setCartOpen,
      popupItem,
      setPopupItem,
      popupVisible,
      setPopupVisible,
      descriptionProduct,
      setDescription,
    };
  
    return (
      <AppContext.Provider value={ value }>
        {children}
      </AppContext.Provider>
    );
  }
  
  export default Provider;
  
  Provider.propTypes = {
    children: propTypes.any,
  }.isRequired;