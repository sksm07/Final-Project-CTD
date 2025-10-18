import {useState, useEffect} from "react";



export default function Feedback(){
    const [flowerName, setFlowerName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [savedFeedback, setSavedFeedback] = useState({});

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem("flowerFeedback")) || {};
        setSavedFeedback(stored);
    }, []);

    const handleSave = ()=>{
        if(!flowerName.trim()) return;
        const updated = {...savedFeedback, [flowerName]: feedback || "No feedback provided"};
        localStorage.setItem("flowerFeedback", JSON.stringify(updated));
        setSavedFeedback(updated);
        setFlowerName("");
        setFeedback("");
    };

    return (
        <div>
            <h2>Flower Feedback</h2>
            <input
                type="text"
                placeholder="Enter flower name"
                value={flowerName} 
                onChange={(e)=> setFlowerName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Does this flower match your personality?"
                value={feedback}
                onChange={(e)=> setFeedback(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>

            {Object.keys(savedFeedback).length > 0 && (
                <>
                    <h3>Your Feedback</h3>
                    <ul>
                        {Object.entries(savedFeedback).map(([flowerKey, userFeedback]) => (
                            <li key={flowerKey}>
                                <h5>{flowerKey}:</h5> {userFeedback}
                            </li>
                        )
                        )}
                    </ul>
                </>
               )

            }
        </div>
    )
}