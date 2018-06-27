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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.1089934104525!2d-75.6964329840118!3d45.42730417910059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04fdfb178c43%3A0x2153e99f88f7fd16!2sRebel.com!5e0!3m2!1sen!2sca!4v1528894321376"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
        />
      </ImageWrapper>
      <NextMeetupDetails>
        <NextMeetupDetailsContainers>
          <NextMeetupHeader>next meetup</NextMeetupHeader>
          <NextMeetupInfo>
            When: July 26th, 2018 @ 6:30pm to 8:30pm
          </NextMeetupInfo>
          <NextMeetupInfo>
            Where: Rebel.com - 12 York st. 3rd Floor, Ottawa K1N 5S6
          </NextMeetupInfo>
          <NextMeetupTalks>
            <Notice>
              🙋‍♂️🙋‍ <br />
              <br />Interested in speaking? Send us an{' '}
              <a href="mailto:ottawareactjs@gmail.com">email</a> or direct
              message on <a href="https://twitter.com/ReactOttawa">Twitter</a>,
              we would like you to present!
            </Notice>
            {/* <NextMeetupTalksHeader>the talks</NextMeetupTalksHeader> */}
            {/* <FlipCards cardData={talks} /> */}
          </NextMeetupTalks>
        </NextMeetupDetailsContainers>
      </NextMeetupDetails>
    </NextMeetupSection>
  );
};

export default NextMeetup;
