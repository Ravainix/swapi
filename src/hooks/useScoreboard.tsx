import { useReducer } from 'react';

export interface ScoreboardState { playerOne: number; playerTwo: number }

const initialState: ScoreboardState = { playerOne: 0, playerTwo: 0 };

enum ScoreboardKind {
  PLAYER_ONE_WIN = 'PLAYER_ONE_WIN',
  PLAYER_TWO_WIN = 'PLAYER_TWO_WIN',
  DRAW = 'DRAW'
}

interface ScoreboardAction {
  type: ScoreboardKind;
}

function ScoreboardReducer(state: ScoreboardState, action: ScoreboardAction): ScoreboardState {
  switch (action.type) {
    case ScoreboardKind.PLAYER_ONE_WIN:
      return {
        ...state,
        playerOne: state.playerOne + 1
      }
    case ScoreboardKind.PLAYER_TWO_WIN:
      return {
        ...state,
        playerTwo: state.playerTwo + 1
      }
    case ScoreboardKind.DRAW:
      return state
    default:
      return state
  }
}

export const useScoreboard = () => {
  const [score, dispatch] = useReducer(ScoreboardReducer, initialState);

  const PlayerOneWinAction = () => dispatch({ type: ScoreboardKind.PLAYER_ONE_WIN });
  const PlayerTwoWinAction = () => dispatch({ type: ScoreboardKind.PLAYER_TWO_WIN });
  const DrawAction = () => dispatch({ type: ScoreboardKind.DRAW });

  return { score, PlayerOneWinAction, PlayerTwoWinAction, DrawAction };
}