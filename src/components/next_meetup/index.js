import * as React from 'react';

import { 
    NextMeetupSection, 
    NextMeetupLocation,
    NextMeetupDetails, 
    NextMeetupDetailsContainers,
    NextMeetupHeader,
    NextMeetupInfo,
    NextMeetupTalks,
    NextMeetupTalksHeader,
} from './next_meetup.styled';

import FlipCards from '../flip_cards';

const talks = [
    {
        id: '00001',
        title: 'Presenter 1',
        content: 'Topic 1',
    },
    {
        id: '00002',
        title: 'Presenter 2',
        content: 'Topic 2',
    },
    {
        id: '00003',
        title: 'Presenter 3',
        content: 'Topic 3',
    }
]

const NextMeetup = () => {
    return (
        <NextMeetupSection>
            <NextMeetupLocation />
            <NextMeetupDetails>
                <NextMeetupDetailsContainers>
                    <NextMeetupHeader>next meetup</NextMeetupHeader>
                    <NextMeetupInfo>When: July 26th, 2018 @ 6:30pm to 8:30pm</NextMeetupInfo>
                    <NextMeetupInfo>Where: Rebel.com - 12 York st. 3rd Floor, Ottawa K1N 5S6</NextMeetupInfo>
                    <NextMeetupTalks>
                        <NextMeetupTalksHeader>the talks</NextMeetupTalksHeader>
                        <FlipCards cardData={talks} />
                    </NextMeetupTalks>
                </NextMeetupDetailsContainers>
            </NextMeetupDetails>
        </NextMeetupSection>
    );
};

export default NextMeetup;