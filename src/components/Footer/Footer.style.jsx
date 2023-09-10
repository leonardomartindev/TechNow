import styled from 'styled-components'
// import { theme } from '../../Theme'

export const FooterContainer = styled.footer`
    width: 100vw;
    height: auto;
    background-color: #4361EE;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 4rem;
    color: white;
    font-size: 1.8rem;
    margin-top: 100px;
    padding-top: 40px;
`
export const InfoContainer = styled.div`
    display:flex;
    gap: 17rem;
    flex-wrap: wrap;
    justify-content:center;
`
export const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
    gap: .4rem;
`
export const Title = styled.h1``
export const Info = styled.p``
export const Line = styled.div`
    width: 100vw;
    height: 2px;
    background-color: white;
`
export const LogoInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 1.5rem;
    `
export const LogoFooter = styled.img`
    width: 10vw;
    border: 2px solid white;
    @media(max-width: 1000px){
        width: 20vw;
    }
`
export const Description = styled.p``