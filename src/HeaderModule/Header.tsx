import HeaderCSS from "./Header.module.css";
import logo from "../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { OutsideClickComponent } from "../commonComponents/OutsideClickComponent";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className={HeaderCSS.headerParent}>
        <div>
          <div className={HeaderCSS.logoParent}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div
          className={HeaderCSS.accountTab}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <button>
            <FontAwesomeIcon icon={faUser} />
            <div>Account</div>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
            {showDropdown && (
              <div className={HeaderCSS.dropdown}>
                <div>My Profile</div>
                <hr />
                <div>Logout</div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};
