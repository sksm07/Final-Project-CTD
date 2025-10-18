import styled from "styled-components";

const Card = styled.div`
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 10px;
    text-align: center;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: translateY(-3px) scale(1.02);
    }
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px; 
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Title = styled.h4`
  margin-top: 10px;
  font-size: 1.1rem;
  color: #333;
`;

export default function FlowerCard({flower, onSelect}) {
    return (
        <Card onClick={onSelect}>
            <ImageWrapper>
              <img src={flower.image} alt={flower.name} />
            </ImageWrapper>
            <Title>{flower.name}</Title>  
        </Card>
    )
}