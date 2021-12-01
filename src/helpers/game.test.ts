import { GameResult } from '../components/Game';
import { Person } from './api';
import { getWinner } from './game';

describe('getWinner', () => {
  it('should return draw when mass is same', () => {
    const testWarriors: Person[] = [
      {
        name: 'Foo',
        attribute: '123',
        attributeName: 'mass',
      },
      {
        name: 'Bar',
        attribute: '123',
        attributeName: 'mass',
      },
    ];

    const result = getWinner(testWarriors[0], testWarriors[1]);

    expect(result).toBe(GameResult.Draw);
  });

  it('should return draw when mass is unknown', () => {
    const testWarriors: Person[] = [
      {
        name: 'Foo',
        attribute: 'unknown',
        attributeName: 'mass',
      },
      {
        name: 'Bar',
        attribute: 'unknown',
        attributeName: 'mass',
      },
    ];

    const result = getWinner(testWarriors[0], testWarriors[1]);

    expect(result).toBe(GameResult.Draw);
  });

  it('should return PlayerOneWin', () => {
    const testWarriors: Person[] = [
      {
        name: 'Foo',
        attribute: '321',
        attributeName: 'mass',
      },
      {
        name: 'Bar',
        attribute: '123',
        attributeName: 'mass',
      },
    ];

    const result = getWinner(testWarriors[0], testWarriors[1]);

    expect(result).toBe(GameResult.PlayerOneWin);
  });

  it('should return PlayerTwoWin', () => {
    const testWarriors: Person[] = [
      {
        name: 'Foo',
        attribute: '123',
        attributeName: 'mass',
      },
      {
        name: 'Bar',
        attribute: '321',
        attributeName: 'mass',
      },
    ];

    const result = getWinner(testWarriors[0], testWarriors[1]);

    expect(result).toBe(GameResult.PlayerTwoWin);
  });
});
