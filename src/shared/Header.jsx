import { useLocation, NavLink } from "react-router";
import {useState, useEffect} from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 15px 20px;
  }
`;

const Brand = styled.h1`
  font-size: 2.5rem;
  color: #d6336c;
  margin: 0;
  text-align: center;
  z-index: 1;
  white-space: nowrap;

  @media (max-width: 425px) {
    font-size: 2rem;
`;

const Nav = styled.nav`
    display: flex;
    gap: 25px;
    position: absolute;   
    right: 40px;
    white-space: nowrap;


    @media (max-width: 1200px) {
    gap: 20px;
    }
     
    @media (max-width: 992px) {
      gap: 15px;
      font-size: 0.95rem;
    }

    @media (max-width: 768px) {
      gap: 12px;
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      flex-direction: column;    
      gap: 3px;                  
      font-size: 0.8rem;    
      right: 12px;      
      top: 50%;           
      transform: translateY(-50%); 
    }
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    color: #444;
    transition: color 0.3s ease, border-bottom 0.3s ease;

    &.active { 
    color: #d6336c;
    font-weight: 700;   
    
    }

    &:hover {
    color: #d6336c;
    }
`

const PageTitle = styled.h2`
  margin-top: 20px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #444;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default function Header() {

    const location = useLocation("");
    const [title, setTitle] = useState("");

    useEffect(()=>{

        if(location.pathname === "/"){
            setTitle("Home")
        }else if(location.pathname === "/about"){
            setTitle("About")
        }else if(location.pathname === "/feedback"){
            setTitle("Feedback")
        }else{ setTitle("Not Found")}

    }, [location])

    return (
        <HeaderWrapper>
          <HeaderContainer>
            <Brand>FlowerSense</Brand>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/feedback">Feedback</StyledLink>
            </Nav>
          </HeaderContainer>
          <PageTitle>{title}</PageTitle>  
        </HeaderWrapper>
    )
}