const RomanNumerals = require('./roman-numerals');

describe('Roman Numerals', () => {
  test.each([[1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']])(
    'should convert %p to %p',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test.each([[1, 'I'], [2, 'II'], [3, 'III']])(
    'should convert %p to %p, with multiple occurrences of I',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 4 to IV', () => {
    expect(new RomanNumerals().convert(4)).toBe('IV');
  });

  test.each([[6, 'VI'], [7, 'VII'], [8, 'VIII']])(
    'should convert %p to %p, with multiple occurrences of I after V',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 9 to IX', () => {
    expect(new RomanNumerals().convert(9)).toBe('IX');
  });

  test.each([[10, 'X'], [20, 'XX'], [30, 'XXX']])(
    'should convert %p to %p, with multiple occurrences of X',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 40 to XL', () => {
    expect(new RomanNumerals().convert(40)).toBe('XL');
  });

  test.each([[60, 'LX'], [70, 'LXX'], [80, 'LXXX']])(
    'should convert %p to %p, with multiple occurrences of X after L',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 90 to XC', () => {
    expect(new RomanNumerals().convert(90)).toBe('XC');
  });

  test.each([[100, 'C'], [200, 'CC'], [300, 'CCC']])(
    'should convert %p to %p, with multiple occurrences of C',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 400 to CD', () => {
    expect(new RomanNumerals().convert(400)).toBe('CD');
  });

  test.each([[600, 'DC'], [700, 'DCC'], [800, 'DCCC']])(
    'should convert %p to %p, with multiple occurrences of C after D',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test('should convert 900 to CM', () => {
    expect(new RomanNumerals().convert(900)).toBe('CM');
  });

  test.each([[1000, 'M'], [2000, 'MM'], [3000, 'MMM']])(
    'should convert %p to %p, with multiple occurrences of M',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );

  test.each([[4, 'IV'], [9, 'IX'], [29, 'XXIX'], [80, 'LXXX'], [294, 'CCXCIV'], [2019, 'MMXIX'],])(
    'should convert %p to %p',
    (input, output) => {
      expect(new RomanNumerals().convert(input)).toBe(output);
    }
  );
});
