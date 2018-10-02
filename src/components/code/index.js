import React from 'react';
import styled from 'styled-components';

const CodeBlock = styled.img`
  position: absolute;
  max-height: 100%;

  @media (min-width: 900px) {
    left: 60%;
  }

  @media (min-width: 1200px) {
    left: 70%;
  }
`;

const Container = styled.span`
  position: absolute;
  left: 40%;
  width: 50vw;
  height: 95%;
  min-width: 50rem;
`;

export default function Code({ className, ...props }) {
  return (
    <Container className={className}>
      <CodeBlock {...props} />
    </Container>
  );
}
