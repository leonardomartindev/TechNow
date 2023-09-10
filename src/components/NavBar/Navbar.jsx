import { LogoBG, NavSearch, Form, Input, Btn, CartIcon, CartWrapper, CartCount } from "./NavBar.style"
import logo from '../../assets/TechNowBG.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import searchProdutcs from "../../api/searchProducts"
import { useContext, useState } from "react"
import AppContext from "../../context/AppContext"
export default function Navbar() {

    const [searchValue, setSearchValue] = useState("")
    const { setProducts } = useContext(AppContext)
    const {cartIsOpen, setCartOpen, cartItems} = useContext(AppContext)

    const toggleCart = ()=>{
        setCartOpen(!cartIsOpen)
      }
    

    const handleSearch = async (event) =>{
        event.preventDefault();
        setSearchValue("")
        const products = await searchProdutcs(searchValue)
        setProducts(products)
    }

  return (
    <NavSearch>
        <LogoBG src={logo}/>
        <Form onSubmit={handleSearch}>
            <Input 
            type="text" 
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            />
            <Btn type="submit"><AiOutlineSearch/></Btn>
        </Form>
            
        <CartWrapper>
            <CartIcon onClick={toggleCart} />
            {cartItems.length > 0 ? <CartCount>{cartItems.length}</CartCount> : null}
         </CartWrapper>
    </NavSearch>
    )
}
