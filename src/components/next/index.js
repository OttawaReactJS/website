import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: transparent;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Map = styled.iframe`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 636px;

  @media (max-width: 1200px) {
    position: relative;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;

  max-width: 50%;
  align-self: flex-end;
  margin: 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: flex-end;

  @media (max-width: 1200px) {
    max-width: 100%;
    margin: 2rem;
  }
`;

const Highlight = styled.span`
  color: ${colors.blue};
`;

const Date = Highlight.extend``;
const Time = Highlight.extend``;
const Location = Highlight.withComponent('a').extend``;

const Where = styled.p`
  border-radius: 4px;
  font-size: 2rem;
  color: #ffffff;
  max-width: 500px;
  padding: 2rem;
  background: rgba(36, 39, 46, 0.9);
  box-shadow: 20px 20px 0 0 ${colors.blue};
`;

const Title = styled.h2`
  line-height: 4rem;
  width: min-content;
  text-align: right
  font-size: 5rem;
  user-select: none;
  align-self: flex-end;
  margin: 1rem;
  color: rgba(36, 39, 46, 0.9);
`;

export default function Next() {
  return (
    <Container>
      <Map
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.43906077822!2d-75.91320998402338!3d45.33994857909951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fff3e4b85b45%3A0xbdcdcef712110bf!2sQlik!5e0!3m2!1sen!2sca!4v1538424142281"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
      <Content>
        <Title>Next Meetup</Title>
        <Where>
          Come and join us for our next Meetup on{' '}
          <Date>October 25th, 2018 </Date> from <Time>6:30pm to 8:30pm</Time>!
          This month we are holding the Meetup at{' '}
          <Location href="https://goo.gl/maps/z9XHXREHup82">
            Qlik Office - 390 March Road, Unit 100 · Kanata
          </Location>
        </Where>
      </Content>
    </Container>
  );
}
