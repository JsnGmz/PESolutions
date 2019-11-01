/*
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// *Simple function to return the square of a number.
const square = (num) => {
  return Math.pow(num, 2);
}

// * Function to check that a^2 = b^2 = c^2
const checkIfTriplet = (a, b, c) => {
  let aSquared = square(a);
  let bSquared = square(b);
  let cSquared = square(c);
  return (aSquared + bSquared) === cSquared;
}

// * our result
let ans = null;

/*
* We start with a at 1 since that is the smallest length of a side.
* We want a + b + c to equal 1000 so that will be the end of our loop.
* We nest another for starting b at a + 1 because we want a to be less than b.
* In order to make a + b + c = 1000 we set c to equal 1000 minus a + b.
* We use the above function to check that a, b, and c are a triplet.
* If so we set ans to the product.
*/
for(let a = 1; a < 1000; a++){
  for(let b = a + 1; b < 1000; b++){
    let c = 1000 - (a + b);
    if(checkIfTriplet(a, b, c)) {
      ans = a * b * c;
    }
  }
}

console.log(ans);