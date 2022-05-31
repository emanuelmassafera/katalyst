const Year = require('./leap-year');

describe('Leap Year', () => {
  test.each([[1, false], [1997, false], [1999, false], [2001, false]])(
    'should return false if the year %p is not divisible by 4',
    (input, output) => {
      expect(new Year(input).isLeapYear()).toBe(output);
    }
  );

  test.each([[4, true], [8, true], [12, true], [1996, true]])(
    'should return true if the year %p is divisible by 4',
    (input, output) => {
      expect(new Year(input).isLeapYear()).toBe(output);
    }
  );

  test.each([[400, true], [800, true], [1200, true], [1600, true]])(
    'should return true if the year %p is divisible by 400',
    (input, output) => {
      expect(new Year(input).isLeapYear()).toBe(output);
    }
  );

  test.each([[1700, false], [1800, false], [1900, false]])(
    'should return false if the year %p is divisible by 100 but not by 400',
    (input, output) => {
      expect(new Year(input).isLeapYear()).toBe(output);
    }
  );
});
