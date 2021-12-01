import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Warrior from './Warrior';
import { GameResource } from '../helpers/api';
import Scoreboard from './Scoreboard';
import { ScoreboardState } from '../hooks/useScoreboard'
import { GameResult } from './Game';

interface GameboardProps {
  warriorOne: GameResource;
  warriorTwo: GameResource;
  gameStatus: GameResult;
  playAgain: () => void;
  score?: ScoreboardState;
}

const Gameboard = ({ warriorOne, warriorTwo, gameStatus, playAgain, score }: GameboardProps) => {
  return (
    <Grid container spacing={2}>
      {score &&
        <Grid item xs={12}>
          <Scoreboard playerOne={score.playerOne} playerTwo={score.playerTwo} />
        </Grid>
      }
      <Grid item xs={5}>
        <Warrior resource={warriorOne} />
      </Grid>
      <Grid item xs={2}>
        <Card data-testid="test">
          <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="subtitle1" component="span" sx={{ textAlign: 'center' }}>
              Winner
            </Typography>
            <Typography variant="h3" component="span" sx={{ textAlign: 'center' }}>
              {gameStatus === GameResult.PlayerOneWin ? "<-" : gameStatus === GameResult.PlayerTwoWin ? "->" : "="}
            </Typography>
            <Button variant="contained" onClick={() => playAgain()}>Play again</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Warrior resource={warriorTwo} />
      </Grid>
    </Grid>
  );
};

export default Gameboard;
