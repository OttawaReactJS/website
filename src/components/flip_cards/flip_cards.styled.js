import styled from 'styled-components';
import colors from '../utils/colors';

import Logo from '../header/images/ReactOttawaLogo.svg';

export const FlipCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FlipCard = styled.div`
  flex: 0 0 22rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 32rem;
  margin-bottom: 4rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover > * {
    &:first-child {
      transform: rotateY(-180deg);
    }

    &:last-child {
      transform: rotateY(0deg);
    }
  } 

  @media (min-width: 1400px) {
    flex: 0 0 18rem;
    height: 2rem;
  }

  @media only screen and (hover: none) { 
      height: 58rem;
  }
`;

export const FlipCardSide = styled.div`
  height: 32rem;
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 1rem 1.4rem 4rem rgba(48,48,58,.3);
  display: flex;

  @media (min-width: 1400px) {
    height: 22rem;
  }

  @media only screen and (hover: none) { 
      height: 58rem;
      position: relative;
  }
`;

export const FlipCardFront = styled(FlipCardSide)`
  background-image: linear-gradient(
    to right bottom,
    ${colors.purple},
    ${colors.purple.dark} 
  );

  @media only screen and (hover: none) { 
    height: 30rem;
    padding-bottom: 5rem;
  }
`;

export const FlipCardBack = styled(FlipCardSide)`
  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${colors.black},
    #1D1D1D  
  );

  @media only screen and (hover: none) { 
      transform: rotateY(0);
      -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
      justify-content: flex-end;
      height: 30rem;
      padding-top: 2rem;
      margin-top: -5rem;
  }
  
`;

export const FlipCardContent = styled.div`
  width: 100%;
  margin: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${colors.white};
`;

export const FlipCardTitle = styled.div`
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 2rem;
  
  @media (min-width: 1400px) {
    font-weight: 200;
    font-size: 1.6rem;
  }
`;

export const FlipCardDivider = styled.div`
  content: '';
  background-color: ${colors.white}
  height: 2px;
  width: 70%;
  margin: 2rem auto;
`;

export const FlipCardDetails = styled.div`
  font-weight: 200;
  font-size: 1.8rem;

  @media (min-width: 1400px) {
    font-size: 1.4rem;
  }
`;

export const FlipCardAvatar = styled.div`
  background-color: orangered;
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  border: 3px solid #DDDDDD;
  box-shadow: 1rem 1.4rem 4rem rgba(1,1,1, .4);

  background-image: linear-gradient(
    to right bottom,
    #707070,
    #1f1f1f
  );

  @media (min-width: 1400px) {
    height: 8rem;
    width: 8rem;
  }
`;
export const FlipCardLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 3rem;
  font-size: 1.4rem;

  @media (min-width: 1400px) {
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  & > a,
  & > a:visited,
  & > a:link {
    text-decoration: none;
    color: ${colors.white};
    letter-spacing: 2px;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1400px) {
      margin-bottom: .6rem;
      letter-spacing: 2px;
    }
  }
`;

