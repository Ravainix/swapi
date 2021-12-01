import { GameResult } from '../components/Game';
import { GameResource } from './api';

export const getWinner = (
  warriorOne: GameResource,
  warriorTwo: GameResource
): GameResult => {
  const attrOne = warriorOne.attribute.replace(/[,-]/g, '');
  const attrTwo = warriorTwo.attribute.replace(/[,-]/g, '');

  if (attrOne === 'unknown' && attrTwo === 'unknown') {
    return GameResult.Draw;
  }
  if (attrOne === 'unknown') {
    return GameResult.PlayerTwoWin;
  } else if (attrTwo === 'unknown') {
    return GameResult.PlayerOneWin;
  } else if (parseInt(attrOne) > parseInt(attrTwo)) {
    return GameResult.PlayerOneWin;
  } else if (parseInt(attrOne) < parseInt(attrTwo)) {
    return GameResult.PlayerTwoWin;
  }

  return GameResult.Draw;
};
