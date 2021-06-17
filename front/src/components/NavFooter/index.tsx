import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useTheme } from "styled-components";
import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus_icon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/user_icon.svg';
import { NavFooterContainer, NavLink, NavLinkIcon, NavLinkText } from "./styles";

const NavFooter: React.FC = () => {
    const {colors} = useTheme();
    const route = useLocation();
    
    const [activeTab, setActiveTab] = useState(route.pathname);

    useEffect(() => {
        setActiveTab(route.pathname);
    }, [route]);
    
  return (
    <NavFooterContainer>
      <NavLink to="/home" isLinkActive={activeTab === '/home'}>
          <NavLinkIcon Icon={HomeIcon} usingStroke></NavLinkIcon>
          <NavLinkText>Home</NavLinkText>
      </NavLink>
      <NavLink to="/add-book" isLinkActive={activeTab === '/add-book'}>
          <NavLinkIcon Icon={PlusIcon}></NavLinkIcon>
          <NavLinkText>Add Book</NavLinkText>
      </NavLink>
      <NavLink to="/profile" isLinkActive={activeTab === '/profile'}>
          <NavLinkIcon Icon={ProfileIcon} usingStroke></NavLinkIcon>
          <NavLinkText>Profile</NavLinkText>
      </NavLink>
    </NavFooterContainer>
  );
};

export default NavFooter;
