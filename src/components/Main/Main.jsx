import { WrapperContainer, ImageDiv, HomeImage } from './MainStyles';
import ButtonSection from '../ButtonSection/ButtonSection';

const MainSection = () => {
    return (
        <>
            <WrapperContainer>
                <ImageDiv>
                    <HomeImage />
                </ImageDiv>
                <ButtonSection />
            </WrapperContainer>
        </>
    )
}

export default MainSection;