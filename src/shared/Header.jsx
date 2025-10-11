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
        }else if(location.pathname === "/favorite"){
            setTitle("Favorite")
        }else{ setTitle("Not Found")}

    }, [location])

    return (
        <div>
          <header>
            <h1>{title}</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/favorite">Favorite</NavLink>
            </nav>
          </header>  
        </div>
    )
}