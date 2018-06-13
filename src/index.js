import React, { Fragment } from 'react';
import { render } from 'react-dom';

// Global stylesheet
import './global.styled';

import Header from './components/header';
import NextMeetup from './components/next_meetup';

const Main = () => (
  <Fragment>
    <Header />
    <NextMeetup />
  </Fragment>
);

render(<Main />, document.getElementById('root'));
