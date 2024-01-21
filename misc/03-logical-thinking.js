// Receive a number as input and must return an array with all odd numbers
function oddNumbers(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};
//The algorithm complexity is O(n), which is the most optimal solution, and there is no need to improve performance.
