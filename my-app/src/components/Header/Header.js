import React from 'react';
import {
    HeaderContainer,
    Title,
    Nav,
    NavLink,
} from "./Header.styled";

const Header = () => {

    return (
        <HeaderContainer>
            <Title>Wellcome to Dongyun's JavaScript Practice Page&emsp;&emsp;&emsp;&emsp;&emsp;Please click the "Home" buttom &rarr;</Title>
            <Nav>
                <NavLink to="/">Home</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;