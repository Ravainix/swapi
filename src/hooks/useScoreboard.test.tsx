import { useScoreboard } from './useScoreboard';
import { render, fireEvent } from '@testing-library/react';


const TestComponent = () => {
  const { score, PlayerOneWinAction, PlayerTwoWinAction, DrawAction } = useScoreboard();

  return <>
    <button onClick={() => PlayerOneWinAction()}>PlayerOneWinAction</button>
    <button onClick={() => PlayerTwoWinAction()}>PlayerTwoWinAction</button>
    <button onClick={() => DrawAction()}>DrawAction</button>

    <span data-testid="p1">{score.playerOne}</span>
    <span data-testid="p2">{score.playerTwo}</span>
  </>;
};

describe('useScoreboard', () => {
  it('should increse playerOne score when win', () => {
    const { getByText, getByTestId } = render(<TestComponent />)

    fireEvent.click(getByText('PlayerOneWinAction'))

    expect(getByTestId('p1')).toHaveTextContent('1');
    expect(getByTestId('p2')).toHaveTextContent('0');
  });

  it('should increse playerTwo score when win', () => {
    const { getByText, getByTestId } = render(<TestComponent />)

    fireEvent.click(getByText('PlayerTwoWinAction'))

    expect(getByTestId('p1')).toHaveTextContent('0');
    expect(getByTestId('p2')).toHaveTextContent('1');
  });

  it('should not increse players score when draw', () => {
    const { getByText, getByTestId } = render(<TestComponent />)

    fireEvent.click(getByText('DrawAction'))

    expect(getByTestId('p1')).toHaveTextContent('0');
    expect(getByTestId('p2')).toHaveTextContent('0');
  });
});
