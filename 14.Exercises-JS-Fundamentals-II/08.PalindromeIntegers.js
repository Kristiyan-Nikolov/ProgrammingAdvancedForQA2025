// 8. Palindrome Integers

// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
// Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

// Output

// · If the current integer is a palindrome, print: "true"

// · Otherwise, print: "false"

function palindrome(array){
    let palidromes = []
    for(let i = 0; i < array.length; i++){
        let chars = array[i].toString().split('')
        let isPalindrome = true
        for (let j = 0; j < Math.floor(chars.length/2); j++){
            if(chars[j] != chars[chars.length - j - 1]){
                isPalindrome = false
                
                break
            }
        }
        
        palidromes.push(isPalindrome) 
        
    }

     //console.log(palidromes)
    for (const element of palidromes) {
         
            console.log(element)
         
    }
}

palindrome([123,323,421,121])
