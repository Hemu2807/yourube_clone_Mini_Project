import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./_Header.css";
import logo from "../IMG/youtube-Logo.png";

function Header() {
  const [navSideClass, setNavSideClass] = React.useState("close");
  const navbarHandller = () => {
    if (navSideClass == "close") {
      setNavSideClass("show");
    } else {
      setNavSideClass("close");
    }
  };

  return (
    <>
      <div className="Header-main-Container">
        <div className={`navSlide ${navSideClass}`}>
          <div className="left-head" style={{ margin: "14px 1px" }}>
            <RxHamburgerMenu
              className="humburger-icon"
              onClick={() => navbarHandller()}
            />
            <img src={logo} alt="" style={{ width: "10rem" }} />
          </div>
        </div>
        <div className="left-head">
          <RxHamburgerMenu
            className="humburger-icon"
            onClick={() => navbarHandller()}
          />
          <img src={logo} alt="" style={{ width: "10rem" }} />
        </div>
        <div className="center-head">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="right-head">
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
}

export default Header;
