import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/footer';
import Header from './components/header';
import NextMeetup from './components/next_meetup';
// Global stylesheet
import './global.styled';

const Main = () => (
  <Fragment>
    <Header />
    <NextMeetup />
    <Footer />
  </Fragment>
);

render(<Main />, document.getElementById('root'));
