function isPrime(num) {
  if (num <= 1) return false;         // 0 and 1 are not prime
  if (num === 2) return true;         // 2 is prime
  if (num % 2 === 0) return false;    // even numbers > 2 are not prime

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;  // found a divisor
  }

  return true;
}
