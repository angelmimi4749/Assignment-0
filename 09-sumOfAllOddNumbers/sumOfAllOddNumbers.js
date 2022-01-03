function sumOfAllOddNumbers(nums) {
  var oddOfEvenNum = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] % 2 != 0) {
      oddOfEvenNum++
    }
  }
  return oddOfEvenNum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;