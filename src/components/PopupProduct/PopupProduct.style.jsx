import styled from 'styled-components'

export const PopupContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, .2);
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top: 0; 
    bottom: 0;
    z-index: 4;
`
export const ProductContainer = styled.div`
    background-color:white;
    width: 50vw;
    height: auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 2px solid #4361EE;
    border-radius: 10px;
    box-shadow: 2px 5px 20px rgba(0,0,0, .3);
    position:relative;
    padding: 20px;
    @media(max-width: 900px){
        width: 85vw;
    }
    @media(max-width: 400px){
        height: 80vh;
        width: auto;
    }

`
export const ProductImg = styled.img`
    height: 300px;
    @media(max-width: 900px){
        width: 500px;
    }
    @media(max-width: 620px){
        width: 400px;
    }
    @media(max-width: 500px){
        width: 350px;
    }
    @media(max-width: 400px){
        width: 280px;
    }

`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #999;
`
export const InfoContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    gap: .5rem;
    align-items:center;
    justify-content:center;
`
export const Title = styled.h1`
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align:center;
    font-size: 3rem;
    @media(max-width: 400px){
        font-size: 2.5rem;
    }
`
export const Description = styled.p`
    font-size: 1.6rem;
    width: 80%;
    @media(max-width: 700px){
        width: 100%;
    }
    @media(max-width: 500px){
        font-size: 1.3rem;
    }
` 
export const Price = styled.p`
    font-size: 3rem;
    color: red;
    font-weight: 500;
`
export const ClosePopup = styled.div`
    width: 45px;
    height: 45px;
    display:flex;
    justify-content:center;
    font-size: 4.5rem;
    align-items:center;
    border-radius: 50%;
    position:absolute;
    top: 0;
    right: 0;
    margin: 10px 20px;
    color:white;
    background:red;
`