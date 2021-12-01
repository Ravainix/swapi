import React from 'react';
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  it('displays correct result', () => {
    const p1Score = 1;
    const p2Score = 2;

    render(
      <Scoreboard playerOne={p1Score} playerTwo={p2Score} />
    );

    const score = screen.getByTestId('score')

    expect(score).toHaveTextContent('1:2')
  });
})