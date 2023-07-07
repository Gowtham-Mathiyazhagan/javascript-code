function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findNextPrime(n) {
  let nextPrime = n+1;
  while (!isPrime(nextPrime)) {
    nextPrime++;
  }
  return nextPrime;
}

// Example usage
const input = 90;
const result = findNextPrime(input);
console.log(result);
