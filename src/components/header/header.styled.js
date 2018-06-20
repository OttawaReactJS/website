import styled from 'styled-components';
import colors from '../utils/colors';

import background from './images/header.jpg';

export const Wrapper = styled.section`
    position: relative;
    width: 100vw;
    height: 50vh;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    overflow-hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-image: url(${background});
  background-color: ${colors.blue};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${colors.text};
    opacity: 0.65;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${colors.white};
  font-size: 3rem;
  @media (min-width: 600px) {
    font-size: 6rem;
  }
`;
