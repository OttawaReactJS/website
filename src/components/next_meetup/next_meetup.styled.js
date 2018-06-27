import styled from 'styled-components';
import colors from '../utils/colors';
import mapImage from './Rebel.map-min.png';

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    min-height: 500px;
  }
`;

export const Notice = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 400px) {
    margin: 3rem;
  }
`;

export const NextMeetupLocation = styled.div`
  background-image: url(${mapImage});
  background-color: ${colors.white};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const NextMeetupDetails = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 90rem;

  margin-bottom: 6rem;
  margin-top: 4rem;

  @media (min-width: 1400px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const NextMeetupSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap-reverse;
  color: ${colors.black};
  align-items: flex-end;
  justify-content: center;
  ${ImageWrapper}, ${NextMeetupDetails} {
    @media (min-width: 1400px) {
      width: 50%;
    }
  }
`;

export const NextMeetupDetailsContainers = styled.div`
  margin: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
`;

export const NextMeetupHeader = styled.h2`
  font-weight: 100;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
  margin-bottom: 3rem;
`;

export const NextMeetupInfo = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 1.6rem;
  max-width: 52rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

export const NextMeetupTalks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const NextMeetupTalksHeader = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  font-size: 2.5rem;
  margin: 3rem 0;
`;
