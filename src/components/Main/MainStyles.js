import styled from 'styled-components';
import Image from '../../assets/images/home-image.png'

export const HomeImage = styled.img.attrs({ src: Image })`
    margin-top: -4rem;
    margin-bottom: -4.5rem;
    width: 414px;
    @media screen and (min-width: 992px) {
        width: 50rem;
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