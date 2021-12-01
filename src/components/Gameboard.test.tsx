import { render, screen } from '@testing-library/react';
import { Starship } from '../helpers/api';
import { GameResult } from './Game';
import Gameboard from './Gameboard';

const testWarriorOne: Starship = {
  name: 'X-Wing',
  attribute: '123',
  attributeName: 'crew'
}
const testWarriorTwo: Starship = {
  name: 'Y-Wing',
  attribute: '321',
  attributeName: 'crew'
}

describe('<Gameboard />', () => {
  it('should render warriorOne', () => {
    const playAgain = jest.fn()
    render(<Gameboard warriorOne={testWarriorOne} warriorTwo={testWarriorTwo} gameStatus={GameResult.PlayerOneWin} playAgain={playAgain} />)

    const name = screen.getByText(testWarriorOne.name)
    const crew = screen.getByText(testWarriorOne.attribute)
    const attrName = screen.getByText(testWarriorOne.name)

    expect(name).toBeInTheDocument()
    expect(crew).toBeInTheDocument()
    expect(attrName).toBeInTheDocument()
  })

  it('should render warriorTwo', () => {
    const playAgain = jest.fn()
    render(<Gameboard warriorOne={testWarriorOne} warriorTwo={testWarriorTwo} gameStatus={GameResult.PlayerOneWin} playAgain={playAgain} />)

    const name = screen.getByText(testWarriorTwo.name)
    const crew = screen.getByText(testWarriorTwo.attribute)
    const attrName = screen.getByText(testWarriorTwo.name)

    expect(name).toBeInTheDocument()
    expect(crew).toBeInTheDocument()
    expect(attrName).toBeInTheDocument()
  })

  it('should render warriorOne as a winner', () => {
    const playAgain = jest.fn()
    render(<Gameboard warriorOne={testWarriorOne} warriorTwo={testWarriorTwo} gameStatus={GameResult.PlayerOneWin} playAgain={playAgain} />)

    const arrow = screen.getByText('<-')

    expect(arrow).toBeInTheDocument()
  })
  it('should render warriorTwo as a winner', () => {
    const playAgain = jest.fn()
    render(<Gameboard warriorOne={testWarriorOne} warriorTwo={testWarriorTwo} gameStatus={GameResult.PlayerTwoWin} playAgain={playAgain} />)

    const arrow = screen.getByText('->')

    expect(arrow).toBeInTheDocument()
  })
  it('should render draw', () => {
    const playAgain = jest.fn()
    render(<Gameboard warriorOne={testWarriorOne} warriorTwo={testWarriorTwo} gameStatus={GameResult.Draw} playAgain={playAgain} />)

    const arrow = screen.getByText('=')

    expect(arrow).toBeInTheDocument()
  })
})