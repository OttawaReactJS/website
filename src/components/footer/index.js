import React from 'react';
import { Love, MadeWith, Twitter, Us, Wrapper } from './footer.styled.js';

export default function Footer() {
  return (
    <Wrapper>
      <Twitter />
      <MadeWith>
        Made with <Love /> by the <Us />
      </MadeWith>
    </Wrapper>
  );
}
