import { Title, FooterContainer, InfoContainer, InfoCard, Info, Line, LogoFooter, Description, LogoInfoContainer } from "./Footer.style"
import logo from '../../assets/TechNowBlue.svg'

export default function Footer() {
  return (
    <FooterContainer>
        <InfoContainer>
            <InfoCard>
                <Title>Lorem Ipsum</Title>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
            </InfoCard>
            <InfoCard>
                <Title>Lorem Ipsum</Title>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
            </InfoCard>
            <InfoCard>
                <Title>Lorem Ipsum</Title>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
            </InfoCard>
            <InfoCard>
                <Title>Lorem Ipsum</Title>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
                <Info>Text info</Info>
            </InfoCard>
        </InfoContainer>
        <Line/>
        <LogoInfoContainer>
            <LogoFooter src={logo}/> 
            <Description>Projeto fictício feito por Leonardo Martin</Description>
        </LogoInfoContainer>
    </FooterContainer>
  )
}
