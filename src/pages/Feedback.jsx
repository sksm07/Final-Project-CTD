import {useState, useEffect} from "react";
import styled from "styled-components";

const FeedbackWrapper = styled.div`
  max-width: 650px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  color: #333;
  background-color: #fffafc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);

  h4 {
    color: #d6336c;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 15px;

    li {
      background-color: #f8f0f5;
      margin-bottom: 12px;
      padding: 12px 18px;
      border-radius: 8px;
      display: flex;
      justify-content: center; 
      align-items: center;
      

      h5 {
        display: inline-block;
        color: #d6336c;
        margin-right: 8px;
        font-weight: 600;
        min-width: 100px;
        }

       button {
          margin-left: 20px;
       }
    }
  }
`;


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
        const formattedName = flowerName.trim().charAt(0).toUpperCase() + flowerName.trim().slice(1).toLowerCase();

        const updated = {...savedFeedback, [formattedName]: feedback || "No feedback provided"};
        localStorage.setItem("flowerFeedback", JSON.stringify(updated));
        setSavedFeedback(updated);
        setFlowerName("");
        setFeedback("");
    };

    const handleDelete = (flowerKey) => {
      const updated = { ...savedFeedback };
      delete updated[flowerKey]; // remove that entry
      localStorage.setItem("flowerFeedback", JSON.stringify(updated));
      setSavedFeedback(updated);
    };

    return (
        <FeedbackWrapper>
            <h4>Flower feedback</h4>
            <input
                type="text"
                placeholder="Enter flower name"
                value={flowerName} 
                onChange={(e)=> setFlowerName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="matched your personality?"
                value={feedback}
                onChange={(e)=> setFeedback(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>

            {Object.keys(savedFeedback).length > 0 && (
                <>
                    <h4>Feedback from the users</h4>
                    <ul>
                        {Object.entries(savedFeedback).map(([flowerKey, userFeedback]) => (
                            <li key={flowerKey}>
                                <h5>{flowerKey}:</h5> {userFeedback}
                                <button onClick={() => handleDelete(flowerKey)}>Delete</button>
                            </li>
                        )
                        )}
                    </ul>
                </>
               )

            }
        </FeedbackWrapper>
    )
}