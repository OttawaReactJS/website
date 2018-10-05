import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

import Hacktoberfest from '../../assets/Hacktoberfest_2018_banner4_522x522.png';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Words = styled.p`
  max-width: 700px;
  font-size: 2rem;
`;

const Title = styled.h2`
  position: absolute;
  line-height: 4rem;
  top: -25%;
  left: -20%;
  transform: translateX(-20%);
  width: min-content;
  text-align: right
  font-size: 5rem;
  user-select: none;
  background: rgba(96, 217, 251, 0.9);
  padding: 2rem;
  border-radius: 4px;

  @media(max-width: 650px)  {
    font-size: 3rem;
    line-height: 2rem;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
  }
`;

const Image = styled.img`
  max-width: 350px;
  box-shadow: 20px 20px 0px 0px ${colors.blue};

  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Content() {
  return (
    <Container>
      <TitleContainer>
        <Image src={Hacktoberfest} />
        <Title>This Month</Title>
      </TitleContainer>
      <Words>
        We are doing{' '}
        <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a> at
        React Ottawa this month! Come and contribute to some open source while
        eating food among like minded people!
      </Words>
    </Container>
  );
}
