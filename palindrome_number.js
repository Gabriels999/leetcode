var isPalindrome = function (x) {
    let total = 0
    let ordenated_count = 0
    const number_string = x.toString()
    for (let i = (number_string.length - 1); i >= 0; i--) {
        if (number_string[i] == number_string[ordenated_count]) {
            total++
        }
        ordenated_count++
    }
    if (total == number_string.length) {
        return true
    }
    return false
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))