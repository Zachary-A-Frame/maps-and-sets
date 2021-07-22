// 1
console.log(new Set([1, 1, 2, 2, 3, 4]))
// returns {1, 2, 3, 4}

// 2
console.log([...new Set("referee")].join(""))
// returns only unique values, joined without space. You get back "ref"

// 3
let m = new Map()
m.set([1, 2, 3], true)
m.set([1, 2, 3], false)
// m now has two sets of values. Both have the same key, but the values are different.

// 4
const hasDuplicate = (arr) => {
    const unique = new Set(arr)
    console.log(unique)

    return (arr.length > unique.size) ? true : false

    // Practicing ternary operator, here's how to do it the other way.
    // if (arr.length != unique.size) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(hasDuplicate([1, 3, 2, 1])) // true
console.log(hasDuplicate([1, 5, -1, 4])) // false

// 5

const isVowel = (char) => {
    // Will return true if our letter is present within our vowel string.
    return "aeiou".includes(char)
}

const vowelCount = (str) => {
    // We start by creating a new map
    const vowelMap = new Map()
    // Iterate over the map. We're actually iterating over a string, so char is a sensible declaration instead of just i
    for (let char of str) {
        // To ensure all letters are checked equally, lower case them all.
        let lowerCaseChar = char.toLowerCase()
        // Conditional statement, if our lowercasechar passed into isVowel returns true, continue.
        if (isVowel(lowerCaseChar)) {
            // If the vowel map has our character already, set the character and update the value.
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            } else {
                // Otherwise, simply set the character with a value of one.
                vowelMap.set(lowerCaseChar, 1)
            }
        }
    }
    return vowelMap
}

console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }