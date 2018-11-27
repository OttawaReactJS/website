import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/footer';
import Header from './components/header';
import Next from './components/next';
import Section from './components/section';
import Social from './components/social';
// Global stylesheet
import './global.styled';

const Main = () => (
  <Fragment>
    <Section>
      <Header />
    </Section>
    {/* <Section>
      <Content />
    </Section> */}
    <Section>
      <Next />
    </Section>
    <Section>
      <Social />
    </Section>
    <Footer />
  </Fragment>
);

render(<Main />, document.getElementById('root'));
