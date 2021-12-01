import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Game from './Game';

import * as mathHelper from '../lib/math';
import * as hookGameResource from '../hooks/useGameResource';
import { Person, Starship } from '../helpers/api';

jest.mock('../lib/math');
jest.mock('../hooks/useGameResource');

const testPeople: Person[] = [{
  name: 'Foo',
  attribute: '74',
  attributeName: 'Mass'
},
{
  name: 'Bar',
  attribute: '74',
  attributeName: 'Mass'
}]

describe('Game', () => {
  it('should render gameboard', async () => {
    const mockedMathHelper = mathHelper as jest.Mocked<typeof mathHelper>;
    mockedMathHelper.getRandomInt.mockReturnValue(0)

    const mockedHookGameResource = hookGameResource as jest.Mocked<typeof hookGameResource>;
    mockedHookGameResource.useGameResource.mockReturnValue(testPeople);

    render(<Game resource={hookGameResource.ResourceKind.Person} />)

    const warriorNames = await screen.findAllByText('Foo')

    expect(warriorNames[0]).toBeInTheDocument();
  })

  it('should allows to play again', async () => {
    const mockedMathHelper = mathHelper as jest.Mocked<typeof mathHelper>;
    mockedMathHelper.getRandomInt.mockReturnValue(0)

    const mockedHookGameResource = hookGameResource as jest.Mocked<typeof hookGameResource>
    mockedHookGameResource.useGameResource.mockReturnValue(testPeople);

    render(<Game resource={hookGameResource.ResourceKind.Person} />)

    await waitFor(() => screen.queryAllByText('Foo'))

    mockedMathHelper.getRandomInt.mockReturnValue(1)
    fireEvent.click(screen.getByText('Play again'))

    const warriorNames = await screen.findAllByText('Bar')
    expect(warriorNames[0]).toBeInTheDocument();
  })

  it('should display draw', async () => {
    const mockedMathHelper = mathHelper as jest.Mocked<typeof mathHelper>;
    mockedMathHelper.getRandomInt.mockReturnValueOnce(0).mockReturnValueOnce(1)

    const mockedHookGameResource = hookGameResource as jest.Mocked<typeof hookGameResource>
    mockedHookGameResource.useGameResource.mockReturnValue(testPeople);

    render(<Game resource={hookGameResource.ResourceKind.Person} />)

    await waitFor(() => screen.queryByText('Bar'))

    const score = await screen.findByTestId('score')
    const gameResult = await screen.findByText('=')

    expect(score).toHaveTextContent('0:0')
    expect(gameResult).toBeInTheDocument()
  })

  it('should display playeOne win', async () => {
    const mockedMathHelper = mathHelper as jest.Mocked<typeof mathHelper>;
    mockedMathHelper.getRandomInt.mockReturnValueOnce(0).mockReturnValueOnce(1)

    const testStarships: Starship[] = [{
      name: 'Ship1',
      attribute: '321',
      attributeName: 'crew'
    },
    {
      name: 'Ship2',
      attribute: '123',
      attributeName: 'crew'
    }]

    const mockedHookGameResource = hookGameResource as jest.Mocked<typeof hookGameResource>
    mockedHookGameResource.useGameResource.mockReturnValue(testStarships)

    render(<Game resource={hookGameResource.ResourceKind.Person} />)

    await waitFor(() => screen.queryByText('Bar'))

    const score = await screen.findByTestId('score')
    const gameResult = await screen.findByText('<-')

    expect(score).toHaveTextContent('1:0')
    expect(gameResult).toBeInTheDocument()
  })

  it('should display playerTwo win ', async () => {
    const mockedMathHelper = mathHelper as jest.Mocked<typeof mathHelper>;
    mockedMathHelper.getRandomInt.mockReturnValueOnce(0).mockReturnValueOnce(1)

    const testStarships: Starship[] = [{
      name: 'Ship1',
      attribute: '123',
      attributeName: 'crew'
    },
    {
      name: 'Ship2',
      attribute: '321',
      attributeName: 'crew'
    }]

    const mockedHookGameResource = hookGameResource as jest.Mocked<typeof hookGameResource>
    mockedHookGameResource.useGameResource.mockReturnValue(testStarships);

    render(<Game resource={hookGameResource.ResourceKind.Person} />)

    await waitFor(() => screen.queryByText('Bar'))

    const score = await screen.findByTestId('score')
    const gameResult = await screen.findByText('->')

    expect(score).toHaveTextContent('0:1')
    expect(gameResult).toBeInTheDocument()
  })
})