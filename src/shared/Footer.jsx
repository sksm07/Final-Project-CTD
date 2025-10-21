import styled from "styled-components";

const FooterContainer = styled.footer`
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    background: #f8f8f8;
    font-size: 0.9rem;
    color: #555;
`

export default function Footer({children}) {
    return <FooterContainer>{children}</FooterContainer>        
}