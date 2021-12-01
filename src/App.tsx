import React, { useState } from 'react';
import { Container } from '@mui/material';

import Game from './components/Game';
import { ResourceKind } from './hooks/useGameResource';
import GameMenu from './components/GameMenu';

function App() {
  const [resource, setResource] = useState<ResourceKind>();
  return (
    <Container fixed>
      {!resource && <GameMenu handleResourceChange={(resource: ResourceKind) => setResource(resource)} />}
      {resource && <Game resource={resource} />}
    </Container>
  );
}

export default App;
