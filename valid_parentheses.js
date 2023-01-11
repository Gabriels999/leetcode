var isValid = function (s) {
    if ((s.length % 2) != 0) {
        return false
    }
    const correct = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let listValues = []
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == correct[listValues[listValues.length - 1]]) {
            listValues.pop()
        } else {
            listValues.push(s.charAt(i))
        }
    }
    return listValues == 0
};
console.log(isValid("(([]){})")) // true
console.log(isValid("]")) // false
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("{[]}")) // true
console.log(isValid("({[)")) // false