import React from "react";
// styles
import "./sideNav.scss";
// icons react-icons
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FiSettings } from "react-icons/fa";
import { TbCameraPlus, TbLetterT, TbMusic, TbNote, TbPencil, TbQuestionMark, TbSettings, TbUnderline, TbVideo } from "react-icons/tb";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="icons">
          <div className="iconsItem">
            <TbSettings className="icon" size={24} />
            <span className="iconText">Settings</span>
          </div>
          <div className="iconsItem">
            <TbCameraPlus className="icon" size={24} />
            <span className="iconText">Media</span>
          </div>
          <div className="iconsItem">
            <TbMusic className="icon" size={24} />
            <span className="iconText">Audio</span>
          </div>
          <div className="iconsItem">
            <TbUnderline className="icon" size={24} />
            <span className="iconText">Subtitles</span>
          </div>
          <div className="iconsItem">
            <TbLetterT className="icon" size={24} />
            <span className="iconText">Text</span>
          </div>
          <div className="iconsItem">
            <TbNote className="icon" size={24} />
            <span className="iconText">Elements</span>
          </div>
          <div className="iconsItem">
            <TbVideo className="icon" size={24} />
            <span className="iconText">Record</span>
          </div>
          <div className="iconsItem">
            <TbPencil className="icon" size={24} />
            <span className="iconText">Draw</span>
          </div>
          <div className="iconsItem">
            <TbQuestionMark className="icon" size={24} />
            <span className="iconText"></span>
          </div> 
      </div>
    </div>
  );
};

const SideNavIcon =({icon}) => {
  
}


export default SideNav;

// https://github.com/fireship-io/tailwind-dashboard
