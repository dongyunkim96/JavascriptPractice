import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeContainer,
    ButtonContainer,
    NumberButton
} from './Home.styled';

const Home = () => {
    const buttonCount = 30;
    const buttons = [];

    for (let i = 1; i <= buttonCount; i++) {
        buttons.push(
            <Link key={i} to={`/${i}`}> {/* 수정된 부분 */}
                <NumberButton>{i}</NumberButton>
            </Link>
        );
    };

    return(
        <HomeContainer>
            <h2>Press the button to check my CSS works.</h2>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
        </HomeContainer>
    );
}

export default Home;