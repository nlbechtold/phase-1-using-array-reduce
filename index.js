const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return element + accumulator;
  }, 0);
  console.log(totalBatteries)


// const totalBatteries = batteryBatches.reduce(function (countObj, currentNum) {
//   if (currentNum in countObj) {
//     countObj[currentNum]++;
//   } else {
//     countObj[currentNum] = 1;
//   }
//   return countObj;
// }, {});

// console.log(totalBatteries); // { a: 3, b: 2, c: 1 }

// const letters = ["a", "b", "c", "b", "a", "a"];

// const lettersCount = letters.reduce(function (countObj, currentLetter) {
//   if (currentLetter in countObj) {
//     countObj[currentLetter]++;
//   } else {
//     countObj[currentLetter] = 1;
//   }
//   return countObj;
// }, {});

// console.log(lettersCount); // { a: 3, b: 2, c: 1 }