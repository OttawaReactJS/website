import React from 'react';
import {
  BackgroundImage,
  HeaderInner,
  LogoWrapper,
  Title,
  TitleContainer,
  Wrapper,
} from './header.styled';
import ReactLogo from './logo.js';

const Header = () => (
  <Wrapper>
    <BackgroundImage />
    <HeaderInner>
      <LogoWrapper>
        <ReactLogo />
      </LogoWrapper>
      <TitleContainer>
        <Title>Empathy.</Title>
        <Title>Inclusion. </Title>
        <Title>Empowerment.</Title>
      </TitleContainer>
    </HeaderInner>
  </Wrapper>
);

export default Header;
