import { CardItems, Line, Sidebar, Title,TotalContainer, TotalPrice,  CloseCart } from "./Cart.style";
import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "./CartItem";
import formatCurrency from "../../utils/formatCurrency";
export default function Cart() {
  const { cartItems } = useContext(AppContext)
  const {cartIsOpen, setCartOpen} = useContext(AppContext)
  const toggleCart = ()=>{
    setCartOpen(!cartIsOpen)
  }
  const totalPrice = cartItems.reduce((acc, item)=> item.price + acc,0);


  return (
    <Sidebar cartIsOpen={cartIsOpen}>
        <div>
        <Title>Seu carrinho de compras!</Title>
        <Line/>
        <CardItems>
            {cartItems.map((cartItem)=> <CartItem key={cartItem.id} data={cartItem}/>)}
        </CardItems>
        </div>
        <TotalContainer>
            <TotalPrice>{formatCurrency(totalPrice, 'BRL')}</TotalPrice>
        </TotalContainer>
        <CloseCart onClick={toggleCart}><AiFillCloseCircle/></CloseCart>
    </Sidebar>
  )
}
