import {useState, useEffect, useCallback} from 'react';
import styled from "styled-components";
import {getFlowers} from '../fetchFlowers';
import FlowerCard from '../features/FlowerCard.jsx';
import Overlay from "../shared/Overlay.jsx";
import FlowerDetail from "../features/FlowerDetail.jsx";

const FlowerGrid = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        transition: opacity 0.3s ease;

        &.dimmed {
            opacity: 0.4;
            pointer-events: none;
        }
    `

    const Container = styled.div`
        position: relative;
    `
    const Intro = styled.p`
        font-weight: 500;
        font-size: 1.4rem;
        font-style: italic;
    `
    const ErrorMessage = styled.p`
      color: red;
      font-weight: bold;
      text-align: center;
      margin-top: 1.5rem;
    `;

export default function FlowerListPage(){

    const [flowers, setFlowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedFlower, setSelectedFlower] = useState(null);


    function handleSelect(flower){
        setSelectedFlower(flower)
    }

    const handleClose = useCallback(() => {
        setSelectedFlower(null);
    }, [])    

    useEffect(()=>{        
      async function loadFlowers() {
        setIsLoading(true);
        setErrorMessage("");

        try {
          const data = await getFlowers();
          setFlowers(data);
        } catch (err) {
          setErrorMessage("Unable to load flowers. Please try again later.");
        } finally {
          setIsLoading(false);
        }
    }

    loadFlowers();        

    }, []);
    
    return (
        <Container>
        <Intro>Click on your favorite flower and discover what it reveals about your personality!!</Intro>

        {isLoading && <p>Loading flowers...</p>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {!errorMessage && (
        <FlowerGrid className={selectedFlower ? "dimmed" : ""}>
            {flowers.map((flower) => (
                <FlowerCard 
                    flower={flower} 
                    key={flower.id}
                    onSelect={()=>handleSelect(flower)}
                />
            )) }
        </FlowerGrid>
        )}

        {selectedFlower && (
            <>
                <Overlay onClick={handleClose} />
                <FlowerDetail flower={selectedFlower} onClose={handleClose} />
            </>
        )}
        </Container>
    )

}