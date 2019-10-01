import React, { Fragment } from 'react';
import Head from 'next/head';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Next from '../src/components/next';
import Section from '../src/components/section';
import Social from '../src/components/social';
import Content from '../src/components/content';
// Global stylesheet
import GlobalStyles from '../src/global.styled';

export default () => (
  <Fragment>
    <GlobalStyles />
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#61dafb" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>Ottawa React</title>
    </Head>
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
