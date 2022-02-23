import styled from 'styled-components';
import logo from "../../assets/icons/logo.svg"

export const HeaderDiv = styled.div`
    width: 100vw;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.625rem;
    @media screen and (min-width: 992px) {
        width: 70vw;
        margin: 0 auto;
        padding-top: 2.563rem;
        margin-bottom: 4.75rem;
    }
`;

export const Logo = styled.img.attrs({ src: logo})`
    padding-top: 1rem;
    width: 9rem;
`;

export const NavGhibli = styled.nav`
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLink = styled.img.attrs((props) => ({ src: props.src }))`
    width: 30px;
    cursor: pointer;
    z-index: 1;
`;