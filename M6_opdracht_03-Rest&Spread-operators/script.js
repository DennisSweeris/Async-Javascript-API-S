//Rest function
optellenRest = (...nums) => nums.reduce((prev, current) => prev + current);
console.log(optellenRest(1, 2, 3, 4, 5, 6)); // verwachte uitkomst: 21

//Spread function
optellenSpread = (num1, num2, num3) => num1 + num2 + num3;
const nums = [1, 2, 3];
console.log(optellenSpread(...nums));  // verwachte uitkomst: 6