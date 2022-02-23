import React from 'react';
import { HeaderDiv, NavGhibli, NavLink, Logo } from './HeaderStyles'
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <Logo />
                <NavGhibli>
                    <NavLink src={Facebook}></NavLink>
                    <NavLink src={Instagram}></NavLink>
                    <NavLink src={Twitter}></NavLink>
                    <NavLink src={Youtube}></NavLink>
                </NavGhibli>
            </HeaderDiv>
        </>

    )
}

export default Header;