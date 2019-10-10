/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

/*
  * Recall from problem 3 that factors of a factor are themselves a factor of the larger number. This is important
  * because it means there is no need to check if a number is divisible by 1 - 20, checking for 11 - 20 is enough.
  * All numbers are divisible by 1 so that is a waste of time to check. If a number is divisible by 12 then it is 
  * also divisible by 2, 3, 4, and 6. If a number is divisibly by 15 it is also divisible by 3 and 5. If it is 
  * divisibly by 14 then also by 2 and 7. If it is divisible by 16 it is also divisible by 2, 4, and 8. If it is
  * divisibly by 18 then also by 2, 3, 6, and 9. And lastly if it is divisibly by 20 it is divisble by 2, 4, 5, and
  * 10. 
*/
const nums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Return false if a number isn't divisible by the numbers above. Otherwise return true.
const checkIfDivisible = (number) => {
  let bool = true;
  nums.forEach((num) => {
    if(number % num !== 0){
      bool = false;
    }
  });
  return bool;
}

/*
  * There are several ways to solve this problem. If your willing to do math you actually can cheat this problem pretty
  * easily. First we can compute the prime factorization of the above numbers.
  *   11 = 1 x 11
  *   12 = 3 x 2^2
  *   13 = 1 x 13
  *   14 = 2 x 7
  *   15 = 3 x 5
  *   16 = 2^4
  *   17 = 1 x 17
  *   18 = 2 x 3^2
  *   19 = 1 x 19
  *   20 = 2^2 x 5
  * 
  * Now multiply the greatest power of each prime.
  *   11 x 13 x 7 x 5 x 2^4 x 17 x 3^2 x 19 = 232,792,560 
  * Note that we aren't multiplying any of the factors of 12 and 20 because in the case of 12, 3^1 and 2^2 are less then 3^2 and 
  * 2^4. While in the case of 20, 5^1 is already present from 15. 
*/

console.log(checkIfDivisible(232792560))

// Super Ineffective Solution. In fact this will freeze you browser if you try it because it simply takes 
// to many loops to go through.

// let startingNum = 20;

// while(!checkIfDivisible(startingNum)) {
//   startingNum+= 20;
// }

// console.log(startingNum);