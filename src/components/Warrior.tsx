import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { GameResource } from '../helpers/api';

interface WarriorProps {
  resource: GameResource;
}

const Warrior = ({ resource }: WarriorProps) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography component="h3" variant="h3">
        {resource.name}
      </Typography>
      <Typography component="h3" variant="subtitle1">
        <span data-testid="attributeName">{resource.attributeName}</span>: <span data-testid="attributeValue">{resource.attribute}</span>
      </Typography>
    </CardContent>
  </Card>
);

export default Warrior;
