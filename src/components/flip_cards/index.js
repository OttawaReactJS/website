import PropTypes from 'prop-types';
import * as React from 'react';
import {
  FlipCard,
  FlipCardAvatar,
  FlipCardBack,
  FlipCardContent,
  FlipCardDetails,
  FlipCardDivider,
  FlipCardFront,
  FlipCardLinks,
  FlipCardsContainer,
  FlipCardTitle,
} from './flip_cards.styled';

const FlipCards = ({ cardData }) => {
  const renderCards = () => {
    return cardData.map(({ id, title, content }) => {
      return (
        <FlipCard>
          <FlipCardFront>
            <FlipCardContent>
              <FlipCardTitle>{title}</FlipCardTitle>
              <FlipCardDivider />
              <FlipCardDetails>{content}</FlipCardDetails>
            </FlipCardContent>
          </FlipCardFront>
          <FlipCardBack>
            <FlipCardContent>
              <FlipCardAvatar />
              <FlipCardLinks>
                <a href="#twitter">Twitter</a>
                <a href="#github">Github</a>
                <a href="#github">Website</a>
              </FlipCardLinks>
            </FlipCardContent>
          </FlipCardBack>
        </FlipCard>
      );
    });
  };

  return <FlipCardsContainer>{renderCards()}</FlipCardsContainer>;
};

FlipCards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default FlipCards;
