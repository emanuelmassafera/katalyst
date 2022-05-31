module.exports = class Year {
  #year;

  constructor(year) {
    this.#year = year;
  }

  isLeapYear() {
    if (this.#isDivisibleBy(100) && this.#isNotDivisibleBy(400)) return false;
    if (this.#isDivisibleBy(4)) return true;
    return false;
  }

  #isDivisibleBy(number) {
    return this.#year % number == 0;
  }

  #isNotDivisibleBy(number) {
    return this.#year % number != 0;
  }
}

