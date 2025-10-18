import { useLocation, NavLink } from "react-router";
import {useState, useEffect} from "react";

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
        <div>
          <header>
            <h2>{title}</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/feedback">Feedback</NavLink>
            </nav>
          </header>  
        </div>
    )
}