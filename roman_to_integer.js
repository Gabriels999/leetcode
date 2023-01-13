//Link = https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
    const checksDoubleConvert = function (s) {
        const doubleConvert = {
            'IV': 4,
            'IX': 9,
            'XL': 40,
            'XC': 90,
            'CD': 400,
            'CM': 900,
        }
        value = 0
        for (let i = 0; i < Object.keys(doubleConvert).length; i++) {
            if (s[0] + s[1] == Object.keys(doubleConvert)[i]) {
                value = doubleConvert[s[0] + s[1]]
                return value
            }
        }
        return value
    }

    const singleConvert = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    total = 0
    for (let i = 0; i < s.length; i++) {
        if (checksDoubleConvert(s[i] + s[i + 1]) == 0) {
            total += singleConvert[s[i]]
        }
        else {
            total += checksDoubleConvert(s[i] + s[i + 1])
            i++
        }
    }
    return total
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

/*

*/