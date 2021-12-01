import React from 'react';
import { render, screen } from '@testing-library/react';
import Warrior from './Warrior';
import { Person, Starship } from '../helpers/api';

const testPerson: Person = {
  name: "Luke",
  attribute: "123",
  attributeName: "mass"
}
const testStarship: Starship = {
  name: "X-Wing",
  attribute: "1",
  attributeName: "crew"
}

describe('Warrior', () => {
  it('renders person name correctly', () => {
    render(<Warrior resource={testPerson} />);

    const name = screen.getByText(testPerson.name)

    expect(name).toBeInTheDocument();
  });

  it('renders pass mass correctly', () => {
    render(<Warrior resource={testPerson} />);

    const mass = screen.getByText(testPerson.attributeName)
    const name = screen.getByText(testPerson.attribute)

    expect(mass).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
  it('renders starship name correctly', () => {
    render(<Warrior resource={testStarship} />);

    const name = screen.getByText(testStarship.name)

    expect(name).toBeInTheDocument();
  });

  it('renders starship mass correctly', () => {
    render(<Warrior resource={testStarship} />);

    const mass = screen.getByText(testStarship.attributeName)
    const name = screen.getByText(testStarship.attribute)

    expect(mass).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
})