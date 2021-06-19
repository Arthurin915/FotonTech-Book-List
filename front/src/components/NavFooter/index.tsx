import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ReactComponent as HomeIcon } from "../../assets/icons/home_icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/user_icon.svg";
import {
  NavFooterContainer,
  NavLink,
  NavLinkIcon,
  NavLinkText
} from "./styles";

const NavFooter: React.FC = () => {
  const route = useLocation();

  const [activeTab, setActiveTab] = useState(route.pathname);

  useEffect(() => {
    setActiveTab(route.pathname);
  }, [route]);

  return (
    <NavFooterContainer>
      <NavLink
        to="/home"
        className={activeTab === "/home" ? "active-link" : ""}
      >
        <NavLinkIcon Icon={HomeIcon} usingStroke></NavLinkIcon>
        <NavLinkText>Home</NavLinkText>
      </NavLink>
      <NavLink
        to="/add-book"
        className={activeTab === "/add-book" ? "active-link" : ""}
      >
        <NavLinkIcon Icon={PlusIcon}></NavLinkIcon>
        <NavLinkText>Add Book</NavLinkText>
      </NavLink>
      <NavLink
        to="/profile"
        className={activeTab === "/profile" ? "active-link" : ""}
      >
        <NavLinkIcon Icon={ProfileIcon} usingStroke></NavLinkIcon>
        <NavLinkText>Profile</NavLinkText>
      </NavLink>
    </NavFooterContainer>
  );
};

export default NavFooter;
