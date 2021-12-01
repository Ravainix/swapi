import React from 'react';
import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import GameMenu from './GameMenu';
import { ResourceKind } from '../hooks/useGameResource';

describe('<GameMenu />', () => {
  it('should fire function with argument starship when starship is clicked', () => {
    const handleResourceChange = jest.fn();

    render(<GameMenu handleResourceChange={handleResourceChange} />)

    fireEvent.click(screen.getByText('Starship'))


    expect(handleResourceChange).toBeCalledTimes(1)
    expect(handleResourceChange).toBeCalledWith(ResourceKind.Starship)
  })

  it('should fire function with argument person when starship is clicked', () => {
    const handleResourceChange = jest.fn();

    render(<GameMenu handleResourceChange={handleResourceChange} />)

    fireEvent.click(screen.getByText('Person'))

    expect(handleResourceChange).toBeCalledTimes(1)
    expect(handleResourceChange).toBeCalledWith(ResourceKind.Person)
  })
})