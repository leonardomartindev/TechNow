import { GlobalStyle } from "./GlobalStyle"
import Adv from "./components/Ad/Adv"
import Cart from "./components/Cart/Cart"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/NavBar/Navbar"
import PopupProduct from "./components/PopupProduct/PopupProduct"
import Products from "./components/Products/Products"
import Provider from "./context/Provider"

function App() {

  return (
    <Provider>
      <GlobalStyle/>
      <Cart/>
      <Navbar/>
      <Adv/>
      <Products 
      title='Lançamentos' 
      description="Em informática e eletrônicos"
      min={0}
      max={15}
      />
      <Products
      title='Mais vendidos' 
      description="Em informática e eletrônicos"
      min={16}
      max={31}/>
      <Footer/>
      <PopupProduct/>
    </Provider>
  )
}

export default App
