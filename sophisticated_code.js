// sophisticated_code.js

/**
 * This code implements a complex and sophisticated algorithm for finding all the prime numbers
 * within a specified range using the Sieve of Eratosthenes algorithm.
 */

// Function to find all prime numbers within a particular range
function findPrimeNumbers(start, end) {
  // Validate input range
  if (start >= end || start < 2) {
    console.log("Invalid range!");
    return;
  }

  // Create an array to hold all numbers from start to end
  let numbers = Array(end - start + 1).fill(true);

  // Set divisors
  let divisors = [];
  let sqrt = Math.floor(Math.sqrt(end));
  for (let i = 2; i <= sqrt; i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= end; j += i) {
        numbers[j] = false;
      }
    }
  }

  // Filter out prime numbers
  let primes = [];
  for (let i = 2; i <= end; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  // Filter prime numbers within the specified range
  primes = primes.filter((prime) => prime >= start);

  // Return the list of prime numbers
  return primes;
}

// Get input range from the user
const start = parseInt(prompt("Enter the starting number:"));
const end = parseInt(prompt("Enter the ending number:"));

// Find the prime numbers within the specified range
const primeNumbers = findPrimeNumbers(start, end);

// Print the prime numbers
console.log("Prime numbers within the specified range:");
primeNumbers.forEach((number) => console.log(number));