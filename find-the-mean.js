//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b) / nums.length
}
