function int_to_roman(num) {
    // define a dictionary of Roman numeral symbols and their corresponding values
    const roman_map = {
      1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
      50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };
    // create an empty string to store the Roman numeral equivalent
    let roman_numeral = '';
    // iterate over the dictionary in reverse order, from the largest value to the smallest
    Object.entries(roman_map).sort((a, b) => b[0] - a[0]).forEach(([value, symbol]) => {
      value = Number(value);
      // while the input number is greater than or equal to the current value, add the corresponding symbol to the Roman numeral string
      while (num >= value) {
        roman_numeral += symbol;
        num -= value;
      }
    });
    // return the final Roman numeral string
    return roman_numeral;
  }
  

console.log(int_to_roman(36));
