import styled from 'styled-components'
// import { theme } from '../../Theme'

export const AdContainer = styled.div`
`
export const AdItemsContainer = styled.div`
    width: 100vw;
    display:flex;
    margin-top: 150px;
    @media(max-width: 850px){
        gap: 3rem;
    }
    @media(max-width: 680px){
        flex-direction:column;
        align-items:center;
    }
    
`

export const ProductImg = styled.div`
    background-image: url("https://http2.mlstatic.com/D_951215-MLU70292400551_072023-L.png");
    width: 50vw;
    height: 50vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;

    @media(max-width: 900px){
        background-image: url("https://http2.mlstatic.com/D_951215-MLU70292400551_072023-K.png");

    }
    
    @media(max-width: 680px){
        background-image: url("https://http2.mlstatic.com/D_951215-MLU70292400551_072023-C.png");
        height: 40vh; 
        width:100vw;

    }
    
`

export const InfoContainer = styled.div`´
    display:flex; 
    flex-direction:column;
    margin-top: 5rem;
    width: 40vw;
    
    @media(max-width: 680px){
        margin:0;
        width: auto;
    }
    
    
`
export const TitleInfo = styled.h1`
    font-size: 5rem;
    @media(max-width: 800px){
        font-size: 4rem;
    }
    @media(max-width: 680px){
        font-size: 5rem;
    }
    @media(max-width: 680px){
        font-size: 4rem;
    }
    @media(max-width: 680px){
        font-size: 3.5rem;
    }
`
export const ParInfo = styled.p`
    font-size: 2rem;
    @media(max-width: 800px){
        font-size: 2rem;
    }
    @media(max-width: 680px){
        display:none;
    }

    `

export const Line = styled.div`
    width: 100vw;
    height: 2px;
    background-color: black;
    margin-top: 3rem;

`

