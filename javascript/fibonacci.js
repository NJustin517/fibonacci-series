function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  }
  const previousTwoNums = [0, 1];
  for (let i = 2; i <= num; i++) {
    const sum = previousTwoNums[0] + previousTwoNums[1];
    previousTwoNums.shift();
    previousTwoNums.push(sum);
    console.log(previousTwoNums);
  }

  return previousTwoNums[1];
}

if (require.main === module) {
  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));

  console.log("Expecting: 34");
  console.log("=>", fibonacci(9));

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// if num is 1, return 0
// else if num is 2, return 1
// initialize variable named previousTwo and set it equal to [0,1]
// loop num - 2 times
//  - initialize sum variable and set it to the sum of the numbers in previousTwo
//  - shift the first num out of previousTwo
//  - push in the sum to previousTwo
// Return previousTwo[1] (the last sum you need)

// And a written explanation of your solution
