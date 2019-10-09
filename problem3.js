/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

*/

/*
  There are a few things to note with the following solution. That allows it to work. Examples using the 
  problem are provided. Examples using a simplified problem are also provided for further clarification.

  * 1. Factors come in pairs and are grouped together by lowest x highest.
  *     e.g. The first factor (after 1) of 600851475143 is 71. 600,851,475,143 / 71 = 8,462,696,833. This means
  *     that 71 is the smallest factor and 8,462,696,833 is the largest factor.
  *     e.g. The factors of 12 are 1,2,3,4,6,12. Were then groups are  1 x 12, 2 x 6, 3 x 4. And 6 is the
  *     largest factor (after 12).
  * 
  * 2. Factors of a factor are themselves a factor of the larger number.
  *     e.g. 839 is a factor of 8,462,696,833. Since 8,462,696,833 is a factor of 600,851,475,143 then
  *     839 is also a factor of 600,851,475,143.
  *     e.g. Both 2 and 3 are factors of 6. Because 6 is a factor of 12 then 2 and 3 must also be factors
  *     of 12.
  * 
  * 3. Based off of 1 and 2 we know that we can start at 2 (the smallest prime number) and keep checking if the
  *    number is divisible by the factor. If it is we simply set the number equal to what it was divided by the 
  *    factor (making the number the largest possible factor). See the exmaples from 1 for details. We then need
  *    to check this new number for any possible factors (because if it does have other factors it can't be prime).
  *    Therefore it makes sense there needs to be some kind of a loop.
  * 
  * 4. From 1 we know that factors come im low x high pairs and get closer to each other. The closes possible pair
  *    is a perfect square (e.g. factors of 4 are 1, 2, 4 with pairs being 1 x 4, and 2 x 2). This means that once 
  *    factor^2 is greater than num there is no point in continuing the loop because we've already seen all the
  *    relavent pairs.
  *     e.g. The pairs for 12 are 1 x 12, 2 x 6, 3 x 4. 4^2 = 16 and 16 > 12. Therefore by the time we have reached
  *     4 we have see all pairs and the highest prime factor must be below it. In this case the highest prime factor.
  *     is 3. 

 */

const largestPrimeFactor = (num) => {
  let factor = 2 // 2 is the first prime number.
  while(Math.pow(factor, 2) < num) { // check if the factor squared is larger than the number.
    if(num % factor === 0){ // if the number is perfectly divisible by the factor
      num /= factor; // set the number = to number / factor
    } else {
      factor++; // otherwise increment the factor.
    }
  }
  return num; // return the number.
}

console.log(largestPrimeFactor(600851475143));

/*
This is the first solution that naturally will come to mind. While the logic is sound
this solution simply takes too long to run. Running it on a console will likely freeze
your browser.

We have an array to store the factors.
const factors = [];

A function to check if a number is prime
const isPrime = (number) => {
  2 is the first prime number
  if (number === 2) {
    return true;
  }
  for all others check for a factor.
  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
} 

Going from 2 up to the number we check if i is prime and if the number divided by i is a whole number.
for (let i = 2; i < 600851475143; i++) {
  if (isPrime(i) && Number.isInteger(600851475143 % i)) {
    factors.push(i);
  }
}

Log the last factor since it is the largest.
console.log(factors[factors.length - 1]);

*/