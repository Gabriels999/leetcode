//Link = https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
    let total = 0
    let ordenatedCount = 0
    const numberString = x.toString()
    for (let i = (numberString.length - 1); i >= 0; i--) {
        if (numberString[i] == numberString[ordenatedCount]) {
            total++
        }
        ordenatedCount++
    }
    if (total == numberString.length) {
        return true
    }
    return false
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))