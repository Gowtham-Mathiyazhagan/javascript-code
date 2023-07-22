function printStringAndSumDigits(str) {
  let result = '';
  let sum = 0;

  for (let char of str) {
    if (isNaN(char)) {
     
      result += char;
    } else {
      
      sum += parseInt(char);
    }
  }

  return result + sum;
}
const input = "AC30BD4011";
const output = printStringAndSumDigits(input);
console.log(output);
