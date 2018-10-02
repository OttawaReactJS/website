import * as React from 'react';
import {
  ImageWrapper,
  NextMeetupDetails,
  NextMeetupDetailsContainers,
  NextMeetupHeader,
  NextMeetupInfo,
  NextMeetupSection,
  NextMeetupTalks,
  Notice,
} from './next_meetup.styled';

const talks = [
  {
    id: '00001',
    title: 'Presener 1asdfaesf',
    content: 'Topicadfmjvaskfjhb lkjadflhjas  ;kahjdlfkjgasdf 1',
  },
  {
    id: '00002',
    title: 'Presenter asdfaesagaseg2',
    content: 'Topim,nbdfk as fasdfkljadkjlkadfc 2',
  },
  {
    id: '00003',
    title: 'Presasdfefenter 3fd',
    content: 'Toadsf,mnbadf ;likadflasdf a;kfhlaksdjfpic 3',
  },
];

const NextMeetup = () => {
  return (
    <NextMeetupSection>
      <ImageWrapper>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.43906077822!2d-75.91320998402338!3d45.33994857909951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fff3e4b85b45%3A0xbdcdcef712110bf!2sQlik!5e0!3m2!1sen!2sca!4v1538424142281"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </ImageWrapper>
      <NextMeetupDetails>
        <NextMeetupDetailsContainers>
          <NextMeetupHeader>next meetup</NextMeetupHeader>
          <NextMeetupInfo>
            When: October 25th, 2018 @ 6:30pm to 8:30pm
          </NextMeetupInfo>
          <NextMeetupInfo>
            Where: Qlik Office - 390 March Road, Unit 100 · Kanata
          </NextMeetupInfo>
          <NextMeetupTalks>
            <Notice>
              🙋‍♂️🙋‍ <br />
              <br />Interested in speaking? Send us an{' '}
              <a href="mailto:ottawareactjs@gmail.com">email</a> or direct
              message on <a href="https://twitter.com/ReactOttawa">Twitter</a>,
              we would like you to present!
            </Notice>
          </NextMeetupTalks>
        </NextMeetupDetailsContainers>
      </NextMeetupDetails>
    </NextMeetupSection>
  );
};

export default NextMeetup;
