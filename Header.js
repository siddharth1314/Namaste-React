import { useState } from "react";

const Header = () => {
    const[signinButton,setSigninButton] = useState("Sign-In")
    return (
        <div className="header-component">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" className="logo-image" />
            </div>
            <div>
                <ul className="header-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <button onClick={()=>{
                        signinButton==="Sign-Out"?setSigninButton("Sign-In"):setSigninButton("Sign-Out")
                    }}>{signinButton}</button>
                </ul>
            </div>
        </div>

    );
};
export default Header;