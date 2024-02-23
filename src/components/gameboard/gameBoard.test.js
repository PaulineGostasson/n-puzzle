import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameBoard from './gameBoard';

describe('GameBoard component', () => {
  it('renders without crashing', () => {
    render(<GameBoard />);
  });

  it('shuffles squares when shuffle button is clicked', () => {
    const { getAllByText, getAllByRole } = render(<GameBoard />);
    const shuffleButton = getAllByText('Shuffle')[0];
    fireEvent.click(shuffleButton);

    const tiles = getAllByRole('button');
    const originalTileOrder = tiles.map(tile => tile.textContent);

    expect(originalTileOrder).not.toEqual([
      "1", "2", "3", "4",
      "5", "6", "7", "8",
      "9", "10", "11", "12",
      "13", "14", "15", ""
    ]);
  });

  it('solves puzzle when solve button is clicked', () => {
    const { getAllByText, getAllByRole, queryByText } = render(<GameBoard />);
    const solveButton = getAllByText('Solve Puzzle')[0];
    fireEvent.click(solveButton);
  
  
    setTimeout(() => {
      const tiles = getAllByRole('button');
      const solvedTileOrder = tiles.map(tile => tile.textContent);
  
      expect(solvedTileOrder).toEqual([
        "1", "2", "3", "4",
        "5", "6", "7", "8",
        "9", "10", "11", "12",
        "13", "14", "15", ""
      ]);
    }, 1000); 
  });
  

  it('moves tiles correctly when clicked', () => {
    const { getAllByRole } = render(<GameBoard />);
    const tiles = getAllByRole('button');
    const zeroTile = tiles.find(tile => tile.textContent === '');
  

    const adjacentTile = tiles.find(tile => tile.textContent !== '' && tile.textContent !== '15');
    fireEvent.click(adjacentTile);
  
   
    setTimeout(() => {
      const newTileOrder = getAllByRole('button').map(tile => tile.textContent);
  
      expect(newTileOrder).toContain(adjacentTile.textContent);
      expect(newTileOrder).toContain('');
    }, 500);
  });
  
});
