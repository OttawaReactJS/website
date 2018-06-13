import styled from 'styled-components';
import colors from '../utils/colors';

export const FlipCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FlipCard = styled.div`
  flex: 1 0 3rem;
  background-color: ${colors.black};
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.85)
  );
  background-image: linear-gradient(
    to right bottom,
    ${colors.purple},
    ${colors.purple.dark}
  );
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export const FlipCardTitle = styled.div`
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 1.2rem;
`;

export const FlipCardDivider = styled.div`
    content: '';
    background-color: ${colors.white}
    height: 2px;
    width: 70%;
    margin: 2rem auto;
`;

export const FlipCardContent = styled.div`
  font-weight: 200;
`;
