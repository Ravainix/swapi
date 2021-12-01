import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { GameResource } from '../helpers/api';
import Gameboard from './Gameboard';
import { useScoreboard } from '../hooks/useScoreboard'
import { getWinner } from '../helpers/game';
import { ResourceKind, useGameResource } from '../hooks/useGameResource';
import { getRandomInt } from '../lib/math';

export enum GameResult {
  PlayerOneWin = 'PlayerOneWin',
  PlayerTwoWin = 'PlayerTwoWin',
  Draw = 'Draw'
}

interface GameProps {
  resource: ResourceKind
}

const Game = ({ resource }: GameProps) => {
  const [warriorOne, setWarriorOne] = useState({} as GameResource);
  const [warriorTwo, setWarriorTwo] = useState({} as GameResource);
  const [gameStatus, setGameStatus] = useState<GameResult>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const data = useGameResource(resource)

  const { score, PlayerOneWinAction, PlayerTwoWinAction } = useScoreboard();

  useEffect(() => {
    if (data.length > 0) {
      setUpPlayers()
      setLoaded(true)
    }
  }, [data]);

  useEffect(() => {
    if (!loaded) return

    switch (getWinner(warriorOne, warriorTwo)) {
      case GameResult.PlayerOneWin:
        setGameStatus(GameResult.PlayerOneWin)
        PlayerOneWinAction();
        break;
      case GameResult.PlayerTwoWin:
        setGameStatus(GameResult.PlayerTwoWin)
        PlayerTwoWinAction();
        break;
      case GameResult.Draw:
        setGameStatus(GameResult.Draw)
        break;
    }

  }, [count])

  const setUpPlayers = () => {
    setWarriorOne(getRandomResource());
    setWarriorTwo(getRandomResource());
    setCount((total) => total + 1)
  }

  const getRandomResource = () => {
    const int = getRandomInt(0, data.length - 1)

    return data[int]
  }

  return (
    <>
      {
        gameStatus
          ? <Gameboard warriorOne={warriorOne} warriorTwo={warriorTwo} score={score} gameStatus={gameStatus} playAgain={setUpPlayers} />
          : (
            <Backdrop open={true} sx={{ color: '#fff' }}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )
      }
    </>
  );
};

export default Game;
