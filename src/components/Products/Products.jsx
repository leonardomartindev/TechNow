import { useContext, useEffect, useState } from "react";
import { CardsContainer, Description, Line, ProductsContainer, Title } from "./Products.style";
import fetchProdutcs from "../../api/fetchProducts";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import propTypes from 'prop-types';


register();
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import AppContext from "../../context/AppContext";


export default function Products(props) {
  const { products, setProducts } = useContext(AppContext);
  const [slidePerView, setSlidePerView] = useState(5)
  const first20Products = products.slice(props.min, props.max);

  useEffect(() => {
    fetchProdutcs().then((response) => {
      setProducts(response);
    });
  }, [])

  useEffect(()=>{
    function handleResize() {
      if (window.innerWidth < 750) {
        setSlidePerView(2);
      } else if (window.innerWidth < 1100) {
        setSlidePerView(3);
      } else if (window.innerWidth < 1300) {
        setSlidePerView(4);
      } else {
        setSlidePerView(5);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize)
    return()=>{
      window.removeEventListener("resize", handleResize)
    };
    
  }, []);
  


  return (
    <ProductsContainer>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>

      <Swiper
        A11y
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
        allowTouchMove={true}
      >
        <CardsContainer>
          {first20Products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card data={product}/>
            </SwiperSlide>
          ))}
        </CardsContainer>
      </Swiper>
      <Line/>
    </ProductsContainer>
  )
}


Products.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
