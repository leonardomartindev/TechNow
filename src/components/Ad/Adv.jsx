import { AdContainer, AdItemsContainer, InfoContainer, Line, ParInfo, ProductImg, TitleInfo } from "./Adv.style";
// import fetchProdutcs from "../../api/fetchProducts";
export default function Adv() {


  return (
    <AdContainer>
        <AdItemsContainer>
            <ProductImg>
            </ProductImg>
            <InfoContainer>
                <TitleInfo>Notebook Acer Nitro 5</TitleInfo>
                <ParInfo>Um novo nível de jogo é possível com este notebook Acer Aspire Nitro 5 AN515-58-58W3, porque permite que você explore e desfrute de uma melhor qualidade de vídeo e imagens mais imersivas. Enfrente cada jogo e supere seus objetivos.</ParInfo>
            </InfoContainer>
        </AdItemsContainer>
        <Line/>
    </AdContainer>
  )
}
