var digitSum = function (s, k) {
    const divideStringGroups = function (s, k) {
        if (typeof (s) == 'object') {
            s = s.join('').replace(',', '')
        }
        let bigArray = []
        let count = k
        let actualPart = '' //devo trocar isso para list ?
        for (let i = 0; i < s.length; i++) {
            actualPart += s[i]
            count--
            if ((count == 0) || i == (s.length - 1)) {
                bigArray.push(actualPart)
                actualPart = ''
                count = k
            }
        }
        return bigArray
    }
    const sumListOfDigits = function (arr, k) {
        if (arr.join('').replace(',', '').length <= k) {
            return arr
        }
        let newArray = []
        for (let i = 0; i < arr.length; i++) {
            let total = 0
            for (let j = 0; j < arr[i].length; j++) {
                total += parseInt(arr[i][j])
            }
            newArray.push(total)
        }
        return newArray
    }
    const sumDigitsFinalRound = function (arr) {
        let finalString = ''
        for (i of arr) {
            finalString += i
        }
        return finalString
    }
    while (s.length > k) {
        const dividedGroups = divideStringGroups(s, k)
        s = sumListOfDigits(dividedGroups, k)
        s = s.join('').replace(',', '')
    }
    return sumDigitsFinalRound(s)
};

console.log(digitSum(s = "55179381572", k = 4))
console.log(digitSum(s = "01234567890", k = 2))
console.log(digitSum(s = "11111222223", k = 3))
console.log(digitSum(s = "00000000", k = 3))