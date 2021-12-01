import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ResourceKind } from '../hooks/useGameResource'

interface GameMenuProps {
  handleResourceChange: (resource: ResourceKind) => void
}

const GameMenu = ({ handleResourceChange }: GameMenuProps) => {
  return (
    <Box>
      <Typography sx={{ color: 'white' }}>Select resource to play</Typography>
      <Button variant="contained" onClick={() => handleResourceChange(ResourceKind.Starship)}>
        Starship
      </Button>
      <Button variant="contained" onClick={() => handleResourceChange(ResourceKind.Person)}>
        Person
      </Button>

    </Box>
  )
}

export default GameMenu
