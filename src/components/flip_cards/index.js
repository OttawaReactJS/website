import PropTypes from 'prop-types';
import * as React from 'react';
import {
  FlipCard,
  FlipCardContent,
  FlipCardDivider,
  FlipCardsContainer,
  FlipCardTitle,
} from './flip_cards.styled';

const FlipCards = ({ cardData }) => {
  const renderCards = () => {
    return cardData.map(({ id, title, content }) => {
      return (
        <FlipCard key={id}>
          <FlipCardTitle>{title}</FlipCardTitle>
          <FlipCardDivider />
          <FlipCardContent>{content}</FlipCardContent>
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
