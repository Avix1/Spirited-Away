import styled from 'styled-components'

export const Button = styled.button`
    display: none;
    @media screen and (min-width: 992px) {
        background-color: transparent;
        border: 2px solid var(--primary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7rem 2.5rem;
        cursor: pointer;
        transform: skewX(-25deg);
    }
`;

export const ButtonText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    transform: skewX(25deg);
`;