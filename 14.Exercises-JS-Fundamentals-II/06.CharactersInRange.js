// 6. Characters in Range

// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside the ASCII table.

function charRange(a, b){
    let startChar = a.charCodeAt(0)
    let endChar = b.charCodeAt(0)
    if(startChar > endChar){
        let temp = startChar
        startChar = endChar
        endChar = temp
    }
    let chars = []
    for (let i = startChar +1; i < endChar; i++){
        chars.push(String.fromCharCode(i))
    }
    console.log(chars.join(' '))
}
charRange('a', 'd')
charRange('C', '#')