import styled from "styled-components";

const Info = styled.p`
    font-family: san-serif;
    font-size: 20px;
    color: #7a4c70ff
`
export default function About(){
    return (
        <div>
            <Info>FlowerSense combines aesthetics with functionality, making it both fun and insightful
                 for anyone curious about the symbolic meanings of flowers and how they relate to personality.
                 Users can browse through beautiful flower cards, view detailed descriptions and traits, and 
                 even share their personal feedback about which flowers resonate with them.</Info>
        </div>
    )
}