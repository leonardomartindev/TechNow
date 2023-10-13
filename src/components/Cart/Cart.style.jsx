import styled from 'styled-components'

export const Sidebar = styled.div`
    width: ${(props)=> (props.cartIsOpen ? '30vw' : '0')};
    height: 100vh;
    position:fixed;
    top:0;
    right:0;
    background: white;
    z-index: 12;
    border-left: 3px solid black;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    transition: width 200ms ease;
    @media(max-width: 1100px){
        width: ${(props)=> (props.cartIsOpen ? '50vw' : '0')}
    }
    @media(max-width: 600px){
        width: ${(props)=> (props.cartIsOpen ? '90vw' : '0')}
    }
`
export const Card = styled.div`
    display: flex;
    position:relative;
    align-items:center;
    gap: 3rem;
    border-top: 2px solid #bbb;
    padding: 1rem 0;
    border-bottom: 2px solid #bbb;
    cursor:pointer;


`
export const CardItems = styled.div`
    display:flex;
    flex-direction:column;
    gap: 1.5rem;
`
export const Title = styled.h1`
    font-size: 3rem;
    margin: 2rem 3rem;

`
export const InfoCard = styled.div`` 
export const InfoT = styled.p`
    font-size: 2.5rem;
`
export const InfoP = styled.p`
    font-size: 2.4rem;
`
export const Line = styled.div`
    width: 100%;
    background-color: black;
    height: 2px;
    margin-bottom: 3rem;
    
`
export const ProductImg = styled.img`
    width: 200px;
`

export const TotalContainer = styled.div`
    display:flex;
    justify-content:end;
    color: #FD3030;
    font-size: 3rem;
    margin: 1rem 2rem;
`
export const TotalPrice = styled.p``

export const Trash = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px 15px;
    font-size: 2.5rem;
    color: #FD3030;
    display:none;
    cursor:pointer;

    
    ${Card}:hover & {
        display:flex;
   }
   
   @media (max-width: 700px) {
    display: flex;
    ${Card}:hover & {
        display: flex; 
    }
}
`
export const CloseCart = styled.div`
   position:absolute;
   font-size: 4rem;
   top: 20px;
   right: 10px;
   color: red;
   cursor: pointer;
`