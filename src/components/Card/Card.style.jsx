import styled from 'styled-components'
// import { theme } from '../../Theme'
export const CardContainer = styled.div`
    margin-top: 5rem;
    display:flex;
    flex-direction: column;
    width: 18vw;
    height: 500px;
    border: 2px solid black;
    border-radius: 6px;
    cursor:pointer;
    justify-content:center;
    margin-bottom: 55px;
    align-items:center;
    padding-top: 2rem;
    position: relative;
    &:hover{
        box-shadow: 2px 5px 12px rgba(0,0,0, .3);
    }
    @media(max-width: 1300px){
        width: 24vw;
    }
    @media(max-width: 1100px){
        width: 30vw;
    }
    @media(max-width: 750px){
        width: 45vw;
    }
    @media(max-width: 500px){
        width: 48vw;
        height: 400px;
    }
  
    `

export const InfoCard = styled.div`
    display:flex;
    flex-direction: column;
    gap: .3rem;
    border-top: 1px solid #999;
    width: 100%;
    margin-top: 2rem;
    padding: .8rem 2rem;
`
export const ProductImage = styled.img`

`
export const ProductTitle = styled.h1`
    font-size: 2.2rem;

    @media(max-width: 500px){
        font-size: 1.9rem;
    }

`
export const ProductPrice = styled.p`
    font-size: 2rem;

    @media(max-width: 500px){
        font-size: 1.7rem;
    }
`

export const AddInCart = styled.button`
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background-color:#159954;
    color:white;
    display:none;
    justify-content:center;
    align-items:center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px 10px;
    font-size: 2.6rem;
    cursor: pointer;

    ${CardContainer}:hover & {
        display:flex;
   }
`

