import styled from "styled-components";
import Arrow from "../../../assets/icons/arrow-button.svg";

export const ArrowButton = styled.img.attrs({ src: Arrow })`
    margin-right: 0.886rem; ;
`;

export const Button = styled.button`
    background-color: var(--primary);
    border: none;
    display: flex;
    align-items: center;
    padding: 0.7rem 2.5rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    cursor: pointer;
`;

export const ButtonText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
`;