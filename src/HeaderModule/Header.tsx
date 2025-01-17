import HeaderCSS from "./Header.module.css";
import logo from "../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { OutsideClickComponent } from "../commonComponents/OutsideClickComponent";
import { DropdownList } from "../commonComponents/dropdownList";
import { LoginController } from "../LoginModule/LoginController";
import { useNavigate } from "react-router-dom";
import { HomeDashboard } from "../HomeModule/Home";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const myAccount = useRef(null);
  const loginContoller = LoginController;
  const { updateLoggedIn, username } = loginContoller();
  const navigate = useNavigate();
  const onLogoutClick = () => {
    updateLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className={HeaderCSS.headerParent}>
        <div className={HeaderCSS.rightHeader}>
          <div>
            <div className={HeaderCSS.logoParent}>
              <h2>Dashboard</h2>
            </div>
          </div>
          <div
            className={HeaderCSS.accountTab}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <button ref={myAccount}>
              <FontAwesomeIcon icon={faUser} />
              <div><b>{username}</b></div>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>

            <OutsideClickComponent
              setShowDropdown={setShowDropdown}
              insideArea={myAccount}
            >
              <DropdownList
                list={[
                  { key: "My Profile", handler: onLogoutClick },
                  { key: "Logout", handler: onLogoutClick },
                ]}
                showDropdown={showDropdown}
                CSSFile={HeaderCSS}
              />
            </OutsideClickComponent>
          </div>
        </div>
      </div>
    </>
  );
};
