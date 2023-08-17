import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[signinButton,setSigninButton] = useState("Sign-In")
    return (
        <div className="header-component">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" className="logo-image" />
            </div>
            <div>
                <ul className="header-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button onClick={()=>{
                        signinButton==="Sign-Out"?setSigninButton("Sign-In"):setSigninButton("Sign-Out")
                    }}>{signinButton}</button>
                </ul>
            </div>
        </div>

    );
};
export default Header;