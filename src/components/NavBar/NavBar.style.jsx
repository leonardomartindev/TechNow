import styled from 'styled-components'
import { theme } from '../../Theme'
import { BiSolidCart } from 'react-icons/bi';

export const NavSearch = styled.nav`
    width: 100vw;
    height: 13vh;
    background-color: ${theme.colors.secondary_color};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    z-index: 3;
`
export const LogoBG = styled.img`
    width: 70px;
    margin-left: 2rem;

    @media(max-width: 720px){
        display:none;
    }
`
export const Form = styled.form`
    display: flex;
    height: 6.5vh;
    border-radius: 3px;

    @media(max-width: 720px){
        margin-left: auto;
    }
    @media(max-width: 700px){
        border-radius: 3px;
        margin-right: 10px;
    }
`
export const Input = styled.input`
    width: 70vw;
    border:none;
    font-size: 2rem;    
    padding-left: 1.5rem;
    outline:none;
    @media(max-width: 700px){
        width: 100vw;
        margin-left: 1rem;

    }

    `
export const Btn = styled.button`
    width: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 3rem;
    background-color: ${theme.colors.primary_color};
    color:white;
    border:none;
    cursor:pointer;
`
export const CartIcon = styled(BiSolidCart)`
  color: white;
  font-size: 6rem;
  margin-right: 4rem;
  cursor:pointer;

  @media(max-width: 700px){
        font-size: 4rem;
    }   
`;
export const CartCount = styled.p`
  position: absolute;
  top: 1px;
  right: 40px;
  background-color:red;
  color:white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  font-size: 1.5rem;

  @media(max-width: 700px){
    width: 18px;
    height: 18px;
    font-size: 1rem;
}

}
`;
export const CartWrapper = styled.div`
  position: relative;

`;
