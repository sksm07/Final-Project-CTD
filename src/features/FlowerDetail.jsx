import styled from "styled-components";
import {useRef, useEffect} from "react";

const DetailsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  padding: 25px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  position: relative;
  top: 20px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff5a5f;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`

export default function FlowerDetail({flower, onClose}) {
  const scrollSection = useRef(null);
  useEffect(()=> {
    if (scrollSection.current) {
      scrollSection.current.scrollIntoView();
    }}, []);

    return (
        <div ref={scrollSection}>
            <CloseButton onClick={onClose}>
                X
            </CloseButton>
            <h2>{flower.name}</h2>
            <img 
                src={flower.image}
                alt={flower.name}
            />
            <p><strong>Traits: </strong>{flower.traits}</p>
            <p><strong>Description: </strong>{flower.description}</p>
        </div>
    )
}