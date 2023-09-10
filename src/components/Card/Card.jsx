import { BsFillCartPlusFill } from "react-icons/bs";
import { AddInCart, CardContainer, InfoCard, ProductImage, ProductPrice, ProductTitle } from "./Card.style";
import propTypes from 'prop-types';
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";
import fetchDescriptionProducts from "../../api/descriptionProducts";
export default function Card({data}) {

    const { title, price, thumbnail, id } = data;
    const { cartItems, setCartItems, setDescription } = useContext(AppContext)
    const handleAddCart = () => setCartItems([ ...cartItems, data])
    const { setPopupItem, setPopupVisible } = useContext(AppContext)
    
    
    const handleAddPopup = async () => {
      setPopupItem(data)
      setPopupVisible(true)
      const response = await fetchDescriptionProducts(id);
          setDescription(response.plain_text)
    }
    return (
    <CardContainer>
        <ProductImage onClick={handleAddPopup} src={thumbnail.replace(/\w\.jpg/gi, 'A.jpg')}/>
        <InfoCard>
            <ProductTitle onClick={handleAddPopup}>{title}</ProductTitle>
            <ProductPrice>{formatCurrency(price, 'BRL')}</ProductPrice>
        </InfoCard>
        <AddInCart onClick={ handleAddCart }><BsFillCartPlusFill/></AddInCart>
    </CardContainer>
    )
}

Card.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;
