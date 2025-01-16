import { useState } from "react";
import sidebarCSS from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPersonShelter } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { LoginController } from "../LoginModule/LoginController";
import {Tooltip as ReactTooltip} from "react-tooltip";

export const SidebarComponent = () => {
  const navigate = useNavigate();
  const loginController = LoginController
  const { updateSidebarActiveTab, currentActiveSidebarTab,} = loginController();
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <div
        className={
          showSidebar
            ? sidebarCSS.expandSidebarParent
            : sidebarCSS.collapseSidebarParent
        }
      >
        <div className={sidebarCSS.headerParent}>
          {showSidebar && (
            <div>
              <FontAwesomeIcon
                icon={faPersonShelter}
                size="xl"
                className={sidebarCSS.icon}
              />
              <h3>Dashboard</h3>
            </div>
          )}
          <div
            className={sidebarCSS.hamIcon}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </div>
        </div>
        <div className={sidebarCSS.bodyParent}>
          <div
            className={`${
              showSidebar
                ? sidebarCSS.itemParentExpand
                : sidebarCSS.itemParentCollapse
            } ${Number(currentActiveSidebarTab) === 0 ? sidebarCSS.active : ""}`}
            onClick={() => {
              updateSidebarActiveTab(0);
              navigate("/app/home")
            }}
            id={`tooltip-${0}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
            </svg>
            {showSidebar && <span>Dashboard</span>}
            {!showSidebar && <ReactTooltip anchorId={`tooltip-${0}`} place="right" content={"Dashboard"} className={sidebarCSS.tooltip}/>}
          </div>
          <div
            className={`${
              showSidebar
                ? sidebarCSS.itemParentExpand
                : sidebarCSS.itemParentCollapse
            } ${Number(currentActiveSidebarTab) === 1 ? sidebarCSS.active : ""}`}
            onClick={() => {
              updateSidebarActiveTab(1);
              navigate("/app/form", {state:{id:null}});            }}
              id={`tooltip-${1}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
            </svg>
            {showSidebar && <span>Add / Edit User</span>}
            {!showSidebar && <ReactTooltip anchorId={`tooltip-${1}`} place="right" content={"Add / Edit User"} className={sidebarCSS.tooltip}/>}
          </div>
          <div
            className={`${
              showSidebar
                ? sidebarCSS.itemParentExpand
                : sidebarCSS.itemParentCollapse
            } ${Number(currentActiveSidebarTab) === 2 ? sidebarCSS.active : ""}`}
            onClick={() => updateSidebarActiveTab(2)}
            id={`tooltip-${2}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
            </svg>
            {showSidebar && <span>Themes</span>}
            {!showSidebar && <ReactTooltip anchorId={`tooltip-${2}`} place="right" content={"Themes"} className={sidebarCSS.tooltip}/>}
          </div>
          <div
            className={`${
              showSidebar
                ? sidebarCSS.itemParentExpand
                : sidebarCSS.itemParentCollapse
            } ${Number(currentActiveSidebarTab) === 3 ? sidebarCSS.active : ""}`}
            onClick={() => updateSidebarActiveTab(3)}
            id={`tooltip-${3}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            {showSidebar && <span>My Profile</span>}
            {!showSidebar && <ReactTooltip anchorId={`tooltip-${3}`} place="right" content={"My Profile"} className={sidebarCSS.tooltip}/>}
          </div>
          <div
            className={`${
              showSidebar
                ? sidebarCSS.itemParentExpand
                : sidebarCSS.itemParentCollapse
            } ${Number(currentActiveSidebarTab) === 4 ? sidebarCSS.active : ""}`}
            onClick={() => updateSidebarActiveTab(4)}
            id={`tooltip-${4}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
            {showSidebar && <span>Logout</span>}
            {!showSidebar && <ReactTooltip anchorId={`tooltip-${4}`} place="right" content={"Logout"} className={sidebarCSS.tooltip}/>}
          </div>
        </div>
      </div>
    </>
  );
};
