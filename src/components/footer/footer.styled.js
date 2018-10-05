import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  background-color: ${colors.blue};
`;

export const MadeWith = styled.span`
  /* font-size: 1.25rem; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 2rem;

  @media (min-width: 400px) {
    font-size: 1.25rem;
  }
`;
export const Love = styled.span.attrs({
  children: '❤️',
  'aria-label': 'heart',
  role: 'emoji',
})`
  padding: 0 2px;
`;

export const Twitter = styled.a.attrs({
  href: 'https://twitter.com/ReactOttawa',
  children: <i className="icon ion-logo-twitter" />,
})`
  font-size: 2.5rem;
  margin: 0 2rem;
  color: ${colors.black};
`;

export const Us = styled.a.attrs({
  href: 'https://github.com/ottawareactjs',
  children: 'Ottawa React Community',
})`
  padding-left: 2px;

  &:active,
  &:focus,
  &:visited {
    color: #000;
  }
`;
