import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/footer';
// import Header from './components/header';
import NextMeetup from './components/next_meetup';
import Section from './components/section';
import Code from './components/code';
import Header from './components/header';

import headerCode from './assets/header-code.png';

// Global stylesheet
import './global.styled';

const Main = () => (
  <Fragment>
    <Section>
      <Header />
      {/* Header */}
      {/* solid React blue-ish background */}
      {/* Img / gif of JSX overlay */}
      {/* Title Ottawa React + react logo */}
    </Section>
    <Section>
      {/* Ads */}
      {/* text location */}
      {/* Img of event */}
    </Section>
    <Section>
      {/* Next meetup */}
      {/* text about meetup */}
      {/* Img/gif of code */}
    </Section>
    <Section>
      {/* Footer */}
      {/* links to meetup, twitter, email */}
      {/* sub footer */}
    </Section>
    // <Header />
    <NextMeetup />
    <Footer />
  </Fragment>
);

render(<Main />, document.getElementById('root'));
