import {useState, useEffect} from 'react';
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

export default function FlowerListPage(){

    const [flowers, setFlowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedFlower, setSelectedFlower] = useState(null);


    function handleSelect(flower){
        setSelectedFlower(flower)
    }

    function handleClose() {
        setSelectedFlower(null)
    }

    useEffect(()=>{
        getFlowers().then(setFlowers);

    }, []);
    
    return (
        <Container>
        <FlowerGrid className={selectedFlower ? "dimmed" : ""}>
            {flowers.map((flower) => (
                <FlowerCard 
                    flower={flower} 
                    key={flower.id}
                    onSelect={()=>handleSelect(flower)}
                />
            )) }
        </FlowerGrid>

        {selectedFlower && (
            <>
                <Overlay onClick={handleClose} />
                <FlowerDetail flower={selectedFlower} onClose={handleClose} />
            </>
        )}
        </Container>
    )

}