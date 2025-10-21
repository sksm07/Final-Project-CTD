import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;  
  min-height: 60vh;    
`;

const Info = styled.p`
    font-family: san-serif;
    font-size: 20px;
    color: #7a4c70ff;
    
`
export default function About(){
    return (
        <AboutWrapper>
            <Info>"FlowerSense combines aesthetics with functionality, making it both fun and insightful
             for anyone curious about the symbolic meanings of flowers and how they relate to personality. 
             Users can browse through beautiful flower cards, view detailed descriptions and traits, 
             and even share their personal feedback about which flowers resonate with them. Whether you’re 
             a flower enthusiast or just curious about self-discovery, FlowerSense makes learning about yourself 
             and nature an engaging experience."</Info>
        </AboutWrapper>
    )
}