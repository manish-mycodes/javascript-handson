var string = 'Welcome to this Javascript Guide!'

//output => "emocleW ot siht tpircsavaJ !ediuG"
console.log(reversingWord(string))

function reverseString(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i)
    }

    return newStr
}

function reversingWord(str) {
    const wordsArr = str.split(' ')
    revWords = wordsArr.map((word) => reverseString(word)).join(' ')
    return revWords
}
