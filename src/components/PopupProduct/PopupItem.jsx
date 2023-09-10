import { useContext } from "react";
import { Description, Line, Price, ProductContainer, Title, InfoContainer, ClosePopup, ProductImg } from "./PopupProduct.style";
import { AiFillCloseCircle } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import propTypes from 'prop-types';
import formatCurrency from "../../utils/formatCurrency";
export default function PopupItem({data}) {

  const { setPopupVisible, descriptionProduct } = useContext(AppContext)
  const { title, thumbnail, price } = data
  

  const closePopup = ()=>{
    setPopupVisible(false)
  }

  return (
    <ProductContainer>
            <ProductImg src={thumbnail.replace(/\w\.jpg/gi, 'K.jpg')}/>
            <Line/>
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{descriptionProduct}</Description>
                <Price>{formatCurrency(price, 'BRL')}</Price>
            </InfoContainer>
        <ClosePopup onClick={closePopup}>
        <AiFillCloseCircle/>
        </ClosePopup>
        </ProductContainer>
  )
}

PopupItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
