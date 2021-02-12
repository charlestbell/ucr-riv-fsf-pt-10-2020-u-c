const sum = (numOne, numTwo) => numOne + numTwo;

const multiply = (numOne, numTwo) => numOne * numTwo;

const addCallBacks = (functionOne, functionTwo) =>
  functionOne(6, 2) + functionTwo(6, 3);

// What does this return?
console.log(addCallBacks(multiply, sum));
