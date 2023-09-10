import { Card, ProductImg, InfoCard, InfoP, InfoT, Trash } from "./Cart.style";
import { FaTrash } from 'react-icons/fa'
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import propTypes from 'prop-types';
import formatCurrency from "../../utils/formatCurrency";

export default function CartItem({ data }) {

    const {cartItems, setCartItems} = useContext(AppContext)
    const { id, thumbnail ,title, price } = data
    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item)=> item.id != id);
        setCartItems(updatedItems)
    }
  return (
    <Card >
        <ProductImg src={thumbnail.replace(/\w\.jpg/gi, 'A.jpg')}/>
            <InfoCard>
                <InfoT>{title}</InfoT>
                <InfoP>{formatCurrency(price, 'BRL')}</InfoP>
            </InfoCard>
            <Trash onClick={handleRemoveItem}><FaTrash/></Trash>
        </Card>
  )
}

CartItem.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;
