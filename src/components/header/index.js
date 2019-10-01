import React from 'react';
import styled from 'styled-components';

const Link = styled.span`
  font-family: 'Permanent Marker';
  color: #f13a59;
`;

const T = styled.h1`
  line-height: 7rem;
  width: min-content;
  text-align: right
  font-size: 8rem;
  user-select: none;
  background: rgba(96, 217, 251, 0.9);
  border-radius: 4px;


  @media (max-width: 1300px) {
    padding: 4rem;
    position: absolute;
  }

  @media(max-width: 500px)  {
    font-size: 5rem;
    line-height: 4rem;
    padding: 2rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const TitleContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: auto;
  z-index: 1;
`;

const MeetupLink = styled(Container)`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 100px;
  max-height: 100px;
  background: #24272e;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;
`;

const Code = styled(Container)`
  max-height: 750px;
  user-select: none;
  z-index: -1;
  width: auto;

  @media (max-width: 500px) {
    height: 400px;
  }

  img {
    max-height: 100%;
  }
`;

export default function Title() {
  return (
    <Container>
      <TitleContainer>
        <T>React Ottawa</T>
        <Code>
          <img
            src="/static/c1.png"
            alt="some React code"
            aria-label="some React code"
          />
        </Code>
      </TitleContainer>
      <MeetupLink as="a" href="https://www.meetup.com/Ottawa-ReactJS-Meetup/">
        <Link>Meetup.com</Link>
      </MeetupLink>
    </Container>
  );
}
