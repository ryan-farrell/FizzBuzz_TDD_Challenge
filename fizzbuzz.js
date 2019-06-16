module.exports = fizzbuzz // We are making the function below fizzbuzz() available for export to our TDD (test driven development) file test.

function fizzbuzz (number) {        // Creating our function and setting 'number' as our parameter.
  // TODO: make this work   
  if (number % 3 === 0 && number % 5 === 0) {       
  return 'fizzbuzz'
  /* Using modulus we are comparing the functions argument against being divided by 3 and 5 and if 
  the value of this is zero in both calculations it will return the string 'fizzbuzz'.*/
} else if (number % 5 === 0) {
  return 'buzz'
  /* Using modulus we are comparing the functions argument against being divided by only 5 and if 
  the value of this is zero it will return the string 'buzz'.*/
} else if (number % 3 === 0) {
  return 'fizz'
  /* Using modulus we are comparing the functions argument against being divided by only 3 and if 
  the value of this is zero it will return the string 'fizz'.*/
} else {return number}
/* Using modulus we are comparing the above statements in this functions first 1 by 1 as is the nature of 
this 'if function'. If the argument fails all three statements above then the value must have a remainder 
and therefore be caught in this else catch and return itself as the result.*/
  
}
  
console.log(fizzbuzz(300));


/* Created a simple loop to check our function above works when given an argument and loops through 
returning the correct outcome based on our main function above. */


function loopFizzBuzz (num) {
for (i = 1; i <= num; i++) {
    console.log(fizzbuzz(i))
  }
}

loopFizzBuzz(300);