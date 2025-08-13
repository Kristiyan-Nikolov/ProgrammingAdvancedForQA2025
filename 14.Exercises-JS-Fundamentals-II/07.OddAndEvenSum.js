// 7. Odd and Even Sum

// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
function oddAndEvenSum(string){
    let oddSum = 0
    let evenSum = 0
    let chars = string.toString().split('')
    for(let i=0; i < chars.length; i++){
        let number = Number(chars[i])
        if(number % 2 == 0){
            evenSum +=number
        } else if (number % 2 == 1){
            oddSum += number
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)