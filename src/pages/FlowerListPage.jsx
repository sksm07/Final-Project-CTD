import {useState, useEffect} from 'react';
import {getFlowers} from '../fetchFlowers';

export default function FlowerListPage(){

    const [flowers, setFlowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        getFlowers().then(setFlowers);

    }, []);
    
    return (
        <div className='flower-grid'>
            {flowers.map((flower) => (
                <div key={flower.id} className="flower-card">
                    <h3>{flower.name}</h3>
                    <img src={flower.image} alt={flower.name}/>
                    
                </div>
            )) }

        </div>
    )

}