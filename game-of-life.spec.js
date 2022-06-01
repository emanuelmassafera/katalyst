const GameOfLife = require('./game-of-life');

describe("Conway's Game of Life", () => {
  test.each([
    [[[true]], [[false]]],
    [[[true, true]], [[false, false]]],
    [[[true, true, false]], [[false, false, false]]],
    [[[true, false], [false, true]], [[false, false], [false, false]]]
  ])(
    'any live cell with fewer than two live neighbours should die',
    (input, output) => {
      const gameOfLife = new GameOfLife(input);
      gameOfLife.nextGen();
      expect(gameOfLife.board).toEqual(output);
    }
  );

  test.each([
    [[[true, true, true]], [[false, true, false]]],
  ])(
    'any live cell with two or three live neighbours should live',
    (input, output) => {
      const gameOfLife = new GameOfLife(input);
      gameOfLife.nextGen();
      expect(gameOfLife.board).toEqual(output);
    }
  );

  test.each([
    [[[true, true, true], [true, true, true], [true, true, true]], [[true, false, true], [false, false, false], [true, false, true]]],
  ])(
    'any live cell with more than three live neighbours should die',
    (input, output) => {
      const gameOfLife = new GameOfLife(input);
      gameOfLife.nextGen();
      expect(gameOfLife.board).toEqual(output);
    }
  );

  test.each([
    [[[true, true], [true, false]], [[true, true], [true, true]]],
  ])(
    'any dead cell with exactly three live neighbours should become a live cell',
    (input, output) => {
      const gameOfLife = new GameOfLife(input);
      gameOfLife.nextGen();
      expect(gameOfLife.board).toEqual(output);
    }
  );
});
