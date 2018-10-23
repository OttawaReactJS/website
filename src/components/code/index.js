import React from 'react';
import styled from 'styled-components';

const CodeBlock = styled.img`
  max-width: 100%;
`;

const Container = styled.span`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 1;
`;

export default function Code({ className, ...props }) {
  return (
    <Container className={className}>
      <CodeBlock {...props} />
    </Container>
  );
}
