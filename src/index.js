import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/footer';
import Header from './components/header';
import NextMeetup from './components/next_meetup';
import hacktoberfest from './assets/Hacktoberfest_2018_banner4_522x522.png';
// Global stylesheet
import './global.styled';

const Main = () => (
  <Fragment>
    <Header />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: '100vw',
        padding: '5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: '1',
          maxWidth: '100rem',
          padding: '20px',
        }}
      >
        <h3
          style={{
            textAlign: 'center',
            fontSize: '4rem',
            fontWeight: 200,
          }}
        >
          We are doing{' '}
          <a href="https://hacktoberfest.digitalocean.com">Hacktoberfest</a> at
          React Ottawa this month! Come and contribute to some open source while
          eating food among like minded people!
        </h3>
      </div>
      <a
        href="https://hacktoberfest.digitalocean.com"
        style={{
          textDecoration: 'none',
          color: 'transparent',
          flex: '4',
          height: 500,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${hacktoberfest})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '100%',
          }}
        >
          hacktoberfest
        </div>
      </a>
    </div>
    <NextMeetup />
    <Footer />
  </Fragment>
);

render(<Main />, document.getElementById('root'));
