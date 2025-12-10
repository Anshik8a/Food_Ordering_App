import { LOGO_URL } from "../utils/common"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return(
        <div className="header">
            <img src= { LOGO_URL } alt="logo" className="logo" />
            <div className="nav-items">
                <ul>
                    <li>    
                        <Link to="/"> Home </Link>
                    </li>
                    <li>    
                        <Link to="/about">About</Link>
                    </li>
                    <li>    
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <button onClick={() => {
                        btnNameReact=== "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;