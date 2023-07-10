function isBeautifulString(str) {
  // Check if the string length is not equal to 3
  if (str.length !== 3) {
    return false;
  }

  // Convert the string to an array of characters and remove duplicates
  const uniqueChars = [...new Set(str)];

  // Check if there are exactly 3 distinct characters
  if (uniqueChars.length === 3) {
    return true;
  }

  return false;
}

// Example usage:
const input = 'Aab';
const beautiful = isBeautifulString(input);

// Output 1 if beautiful, otherwise output 0
console.log(beautiful ? '1' : '0');
