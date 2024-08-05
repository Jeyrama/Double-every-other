/*
Write a function that doubles 
every second integer in a list, 
starting from the left.

Example:
  input:
  [1,2,3,4]

  output:
  [1,4,3,8]
*/


// Solution

function doubleEveryOther(a) {
  let arr = a;
  for (let i = 1; i < arr.length; i+=2) {
    arr[i] = arr[i]*2;
  }
  return arr;
}

// or

const doubleEveryOther = a => 
  a.map((val, idx) => val * (idx % 2 + 1));