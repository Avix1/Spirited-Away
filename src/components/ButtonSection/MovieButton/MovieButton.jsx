import React from 'react';
import { Button, ArrowButton, ButtonText } from './MovieButtonStyles';

const MovieButton = () => {
    return (
        <>
            <Button>
                <ArrowButton />
                <ButtonText>Assistir agora</ButtonText>
            </Button>
        </>
    );
};

export default MovieButton;