import React from 'react';

import { Wrapper, BackgroundImage, Title } from './header.styled';
import ReactLogo from './logo.js';

const Header = () => (
    <Wrapper>
        <BackgroundImage />
        <ReactLogo/>
        <Title> Ottawa React </Title>
    </Wrapper>
);

export default Header;
