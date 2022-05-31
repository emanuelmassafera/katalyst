module.exports = class RomanNumerals {
  convert(number) {
    const stringifiedNumber = String(number);
    let romanNumeral = '';

    for (let index = 0; index < stringifiedNumber.length; index++) {
      const element = Number(stringifiedNumber[index]);
      const multiplier = Math.pow(10, stringifiedNumber.length - 1 - index);
      const pattern = this.#getPattern(element * multiplier);

      romanNumeral = romanNumeral + pattern;
    }

    return romanNumeral;
  }

  #getPattern(number) {
    if (number == 0) return '';
    if (number >= 1 && number <= 3) return 'I'.repeat(number);
    if (number == 4) return 'IV';
    if (number == 5) return 'V';
    if (number >= 6 && number <= 8) return 'V' + 'I'.repeat(number - 5);
    if (number == 9) return 'IX';
    if (number >= 10 && number <= 30) return 'X'.repeat(number / 10);
    if (number == 40) return 'XL';
    if (number == 50) return 'L';
    if (number >= 60 && number <= 80) return 'L' + 'X'.repeat((number / 10) - 5);
    if (number == 90) return 'XC';
    if (number >= 100 && number <= 300) return 'C'.repeat(number / 100);
    if (number == 400) return 'CD';
    if (number == 500) return 'D';
    if (number >= 600 && number <= 800) return 'D' + 'C'.repeat((number / 100) - 5);
    if (number == 900) return 'CM';
    if (number == 1000) return 'M';
    if (number >= 1000 && number <= 3000) return 'M'.repeat(number / 1000);
  }
}
