import React from 'react';
import styled from 'styled-components';
import code from '../../assets/c1.png';

const Link = styled.span`
  font-family: 'Permanent Marker';
  color: #f13a59;
`;

const T = styled.h1`
  position: relative;
  font-size: 10rem;
  width: min-content;
  line-height: 9rem;
  text-align: right;
  user-select: none;
  background: rgba(96, 217, 251, 0.9);
  padding: 3rem;
  border-radius: 4px;
  margin-right: 10vw;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;

  &:before {
    position: absolute;
    content: '';
    width: 100vw;
    background: #61dafb;
    height: 390px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const TitleContainer = Container.extend`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;

  &:before {
    background: transparent;
  }
`;

const MeetupLink = Container.withComponent('a').extend`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 150px;
  max-height: 150px;
  background: #24272e;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;

  &:before {
    background: transparent;
  }
`;

const Code = Container.extend`
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 750px;
  transform: translateY(-50%);
  user-select: none;
  z-index: -1;

  &:before {
    background: transparent;
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
          <img src={code} />
        </Code>
      </TitleContainer>
      <MeetupLink href="https://www.meetup.com/Ottawa-ReactJS-Meetup/">
        <Link>Meetup.com</Link>
      </MeetupLink>
    </Container>
  );
}

// <div
//   style={{
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100vw',
//     height: '100vh',
//     backgroundSize: 'cover',
//   }}
// >
//   <div
//     style={{
//       display: 'flex',
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//     }}
//   >
//     <h1
//       style={{
//         fontSize: '5rem',
//         fontWeight: 400,
//         textAlign: 'center',
//         userSelect: 'none',
//       }}
//     >
//       Ottawa React
//     </h1>
//   </div>
//   <div
//     style={{
//       position: 'relative',
//       height: '100%',
//       width: '100%',
//       zIndex: 1,
//     }}
//   >
//     <img
//       src={code}
//       style={{
//         position: 'absolute',
//         width: 850,
//         bottom: 0,
//         left: '50%',
//         transform: 'translateX(-50%)',
//       }}
//     />
//     <div
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100vw',
//         height: '10rem',
//         backgroundColor: '#61dafb',
//         zIndex: -1,
//       }}
//     />
//   </div>
