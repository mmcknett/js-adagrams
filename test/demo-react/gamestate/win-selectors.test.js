import { WinScreenInfo } from 'demo-react/gamestate/win-selectors';
import { mockPlayerList } from './mock-player-list';

const state = { players: mockPlayerList };

// These require a working Adagrams implementation
// They are pinning tests only, for refactoring.
describe('WinScreenInfo', () => {
  it('Calculates the winner', () => {
    const winScreen = new WinScreenInfo(state);

    expect(winScreen.getWinner()).toEqual('Max');
  });

  it('Calculates the winning score', () => {
    const winScreen = new WinScreenInfo(state);

    expect(winScreen.getWinningScore()).toEqual(22);
  });

  it('Calculates the winner for each round', () => {
    const winScreen = new WinScreenInfo(state);

    expect(winScreen.roundWinners.length).toEqual(2);
    expect(winScreen.roundWinners).toEqual([
      { name: 'Max', score: 13 },
      { name: 'Elliot', score: 11 }
    ])
  })
});