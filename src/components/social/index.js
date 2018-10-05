import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import coding from '../../assets/coding.webm';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 100%;

  video {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    max-height: 80%;
    z-index: -1;
    box-shadow: 20px 20px 0 0 ${colors.blue};
    border-radius: 4px;
  }
`;

const Button = styled.a`
  margin: 1rem;
  height: 2.5rem;
  width: 8rem;
  background: ${colors.blue.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 2px 2px 0 0 ${colors.blue};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: -2px -2px 2px 1px ${colors.blue.light};
    background: ${colors.blue};
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 4rem;

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Social() {
  return (
    <Container>
      <video
        autoPlay
        loop
        src={coding}
        aria-label="Image of React being coded"
      />
      <Title>
        <span role="img" aria-label="woman waving">
          🙋‍♀️
        </span>{' '}
        Talk to Us!{' '}
        <span role="img" aria-label="man waving">
          🙋‍♂️
        </span>
      </Title>
      <ButtonContainer>
        <Button href="https://twitter.com/ReactOttawa">Twitter</Button>
        <Button href="mailto:ottawareactjs@gmail.com">Email</Button>
        <Button href="https://github.com/OttawaReactJS">Github</Button>
        <Button href="https://meetup.com/Ottawa-ReactJS-Meetup">Meetup</Button>
      </ButtonContainer>
    </Container>
  );
}
