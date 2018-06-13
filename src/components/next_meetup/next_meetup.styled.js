import styled from 'styled-components';
import colors from '../utils/colors';

import mapImage from './Rebel.map-min.png';

export const NextMeetupSection = styled.section`
    position: relative;
    width: 100vw;
    min-height: 25rem;
    display: flex;
    justify-content: flex-end;
    overflow-hidden;
    color: ${colors.black}

    & > * {
      flex: 0 0 50%;
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
    display: flex;
    justify-content: center;
`;

export const NextMeetupDetailsContainers = styled.div`
    flex: 1;
    margin: 2.5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NextMeetupHeader = styled.h2`
    font-weight: 100;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 3rem;
`;

export const NextMeetupInfo = styled.div`
    width: 100%;
    font-weight: 200;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
`;

export const NextMeetupTalks = styled.div`
    width: 100%;
`;

export const NextMeetupTalksHeader = styled.h3`
    text-transform: uppercase;
    text-align: center;
    font-weight: 100;
`;
