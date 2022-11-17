import "./header.css";
import { LOGO, ARROW_DOWN } from "../../config/images";
import { useState } from "react";

const Header = () => {

    const [state, setState] = useState(false);

    const change = () => {
        setState(!state);
    }
    return (
        <div className="header">
            <div className="logo-nav">
                <img src={LOGO} />
            </div>
            <div className="menu-nav">
                <div className="menu-container">
                    <div className="menu-label">Products
                        <img src={ARROW_DOWN} className="arrow-down" />
                    </div>
                    <div className="menu-label">How It Work
                        <img src={ARROW_DOWN} className="arrow-down" />
                    </div>
                    <div className="menu-label">Community</div>
                    <div className="menu-label">Explorer</div>
                    <div className="menu-label">Wallet</div>
                    <div className="menu-label">Docs</div>
                </div>
                <div className="expander" onClick={change}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {state ?
                    <div className="menu-container1">
                        <div className="menu-label">Products
                            <img src={ARROW_DOWN} className="arrow-down" />
                        </div>
                        <div className="menu-label">How It Work
                            <img src={ARROW_DOWN} className="arrow-down" />
                        </div>
                        <div className="menu-label">Community</div>
                        <div className="menu-label">Explorer</div>
                        <div className="menu-label">Wallet</div>
                        <div className="menu-label">Docs</div>
                    </div>
                    : <></>
                }
                <div className="sign-in-button">Sign In</div>
            </div>
        </div>
    );
}

export default Header;