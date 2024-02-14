import * as types from '../../../../assets/types'
import { gameOver, gameResult, startGame } from './game';

const removeCard = cardArray => {
  cardArray.pop();
  return { 
    type: types.REMOVE_CARD, 
    payload: { cardArray } 
  };
};

const flippedCard = cardFlipped => {
  return { 
    type: types.FLIPPED_CARD, 
    payload: { cardFlipped } 
  };
};

const defuseCard = (defuseCardNumber, res) => {
  return { 
    type: types.DEFUSE_CARD, 
    payload: { defuseCardNumber, res } 
  };
};

const catCard = () => {
  return { 
    type: types.CAT_CARD 
  };
};

const shuffleCard = () => {
  return { 
    type: types.SHUFFLE_CARD 
  };
};

export const flipCard = (user) => (dispatch, getState) => {
  const { cardArray, defuseCardNumber } = getState().card;
  const card = cardArray[cardArray.length - 1];

  dispatch(flippedCard(card));

  if (card === 'Cat card') dispatch(catCard());
  if (card === 'Defuse card') dispatch(defuseCard(defuseCardNumber + 1, 'Added Defuse Card'));
  if (card === 'Exploding kitten card') {
    if (defuseCardNumber !== 0) dispatch(defuseCard(defuseCardNumber - 1, 'Defuse Card Used'));
    else {
      dispatch(gameOver(user, dispatch));
      setTimeout(() => dispatch(startGame()), 2000);
    }
  }
  if (card === 'Shuffle card') {
    dispatch(shuffleCard());
    setTimeout(() => dispatch(startGame()), 1300);
  }
  
  if (cardArray.length === 0){
    dispatch(gameResult(user, dispatch));
    setTimeout(() => dispatch(startGame()), 2000);
  }
  dispatch(removeCard(cardArray));
};
