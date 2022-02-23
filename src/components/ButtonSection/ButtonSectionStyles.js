import styled from 'styled-components';

export const ButtonDiv = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
        width: 500px;
    }
`;

export const ContainerDiv = styled.div`
    height: 50vh;
    padding: 0 1.563rem;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
    margin-top: 2rem;
    @media screen and (min-width: 992px) {
        width: 445px;
    }
`;

export const MainTitleDiv = styled.div`
    width: 70vw;
    @media screen and (min-width: 992px) {
        width: 21vw;
    }
`;

export const TextSection = styled.p`
    font-weight: 400;
    margin-bottom: 4.5rem;
    @media screen and (min-width: 992px) {
        font-size: 1rem;
    }
`;

export const NameTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 0.375rem;
    @media screen and (min-width: 992px) {
        font-size: 1.875rem;
        margin-bottom: 0.875rem;
    }
`;

export const MainTitle = styled.h1`
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 3.815rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 992px) {
        font-size: 4.25rem;
        margin-bottom: 1.563rem;
    }
`;