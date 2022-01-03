function sumOfAllEvenNumbers(nums) {
  var sumOfEvenNum = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      sumOfEvenNum++
    }
  }
  return sumOfEvenNum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;