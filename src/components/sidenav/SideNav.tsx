import React from "react";
// styles
import "./sideNav.scss";
// icons react-icons
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="sidenav  dark:bg-gray-900 shadow-lg">
      {/* <i>A</i> */}
      <SideNavIcons icon={<FaFire size="28" />} />
      {/* <Divider /> */}
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
      <i>F</i>
    </div>
  );
};

const SideNavIcons = ({
  icon,
  text = "tooltip 💡"
}: {
  icon: any;
  text: any;
}) => {
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>;
};
export default SideNav;

// https://github.com/fireship-io/tailwind-dashboard
