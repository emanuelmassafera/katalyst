const FizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  test.each([[1, '1'], [2, '2'], [4, '4']])(
    'should convert %p to %p',
    (input, output) => {
      expect(new FizzBuzz().convert(input)).toBe(output);
    }
  );

  test.each([[3, 'Fizz'], [6, 'Fizz'], [9, 'Fizz']])(
    'should convert %p to %p',
    (input, output) => {
      expect(new FizzBuzz().convert(input)).toBe(output);
    }
  );

  test.each([[5, 'Buzz'], [10, 'Buzz'], [20, 'Buzz']])(
    'should convert %p to %p',
    (input, output) => {
      expect(new FizzBuzz().convert(input)).toBe(output);
    }
  );

  test.each([[15, 'FizzBuzz'], [30, 'FizzBuzz'], [45, 'FizzBuzz']])(
    'should convert %p to %p',
    (input, output) => {
      expect(new FizzBuzz().convert(input)).toBe(output);
    }
  );
});
