//Link = https://leetcode.com/problems/concatenation-of-array/

var getConcatenation = function (nums) {
    return nums.concat(nums)
};

console.log(getConcatenation([5, 8, 1, 9, 9, 18, 16, 1, 11, 6, 8, 10]))
console.log(getConcatenation([1, 2, 1]))
console.log(getConcatenation([1, 3, 2, 1]))