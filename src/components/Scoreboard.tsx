import React from 'react';
import { Card, CardContent, Box, Typography, Grid } from '@mui/material';

interface ScoreboardProps {
  playerOne: number;
  playerTwo: number;
}

const Scoreboard = ({ playerOne, playerTwo }: ScoreboardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex', justifyContent: 'center'
            }}>
              <Typography data-testid="score" sx={{ fontSize: 36 }} variant="body2" component="span">{playerOne}:{playerTwo}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Scoreboard;
