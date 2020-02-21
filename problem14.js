/*
Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:
  n -> n / 2 (n is even)
  n -> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// * function that implements rule above.
const collatz = num => num % 2 === 0 ? num / 2 : 3 * num + 1;

// * grabs the length of the sequence.
const sequenceLength = (num) => {
  // * initial length is 0
  let count = 0;
  // * break the loop when our number reaches 1.
  while (num !== 1) {
    // * reassign the number based on the collatz rule.
    num = collatz(num);
    // * increment the count by 1.
    count++;
  }
  // * increament the count once more before returning the number. This is done because the while loop
  // * breaks when num = 1 but 1 is part of the sequence.
  return ++count;
}

// * 999999 is the first below 1_000_000.
let num = 999999;
// @longest = the longest sequence.
let longest = 0;
// @longestNum = the actual number that caused the longest sequence
let longestNum = 0;

// * Break out of the loop at one.
while (num > 1) {
  // * get the sequence length of the current number.
  let size = sequenceLength(num);
  // * if the current number sequence length is larger than the current largerst.
  if (size > longest) {
    // * keep track of the new largest sequence length.
    longest = size
    // * keep track of the new number that caused the largest sequence length.
    longestNum = num;
  }
  // * decrement num
  num--;
}

// * log the largest number that cause the sequence length.
console.log(longestNum);