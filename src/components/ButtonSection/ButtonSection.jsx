import { ContainerDiv, NameTitle, MainTitleDiv, MainTitle, TextSection, ButtonDiv } from './ButtonSectionStyles';
import MovieButton from './MovieButton/MovieButton';
import TrailerButton from './TrailerButton/TrailerButton';

const ButtonSection = () => {
    return (
        <>
            <ContainerDiv>
                <NameTitle>HAYAO MIYAZAKI</NameTitle>
                <MainTitleDiv>
                    <MainTitle>A VIAGEM DE CHIHIRO</MainTitle>
                </MainTitleDiv>
                <TextSection>
                    Chihiro chega a um mundo mágico dominado por uma bruxa.
                    Aqueles que a desobedecem são transformados em animais.
                </TextSection>
                <ButtonDiv>
                    <MovieButton />
                    <TrailerButton />
                </ButtonDiv>
            </ContainerDiv>
        </>
    );
};

export default ButtonSection;