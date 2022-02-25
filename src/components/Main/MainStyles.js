import styled from 'styled-components';
import Image from '../../assets/images/haku-2.png'

export const HomeImage = styled.img.attrs({ src: Image })`
    width: 25rem;
    padding: 10px 20px;

    @media screen and (min-width: 992px) {
        width: 45rem;
    }
`;

export const ImageDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperContainer = styled.div`
    @media screen and (min-width: 992px) {
        width: 70vw;
        display: flex;
        flex-direction: row;
        flex-direction: row-reverse;
        margin: 0 auto;
    }
`;