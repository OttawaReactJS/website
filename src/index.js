import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/footer';
import Section from './components/section';
import Header from './components/header';
import Content from './components/content';
import Next from './components/next';
import Social from './components/social';

// Global stylesheet
import './global.styled';

const Main = () => (
  <Fragment>
    <Section>
      <Header />
    </Section>
    <Section>
      <Content />
    </Section>
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
