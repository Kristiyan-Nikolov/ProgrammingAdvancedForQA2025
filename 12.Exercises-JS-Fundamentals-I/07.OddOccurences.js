//7. Odd Occurrences
function oddOccurrences(input){
    let inputArray = input.split(' ')
    var finalArray = []
    for (let i = 0 ; i < inputArray.length; i++){
        let oddOrEvenWord = inputArray[i].toLowerCase()
        let counter = 0
        for (let j = 0; j < inputArray.length; j++){
            if (oddOrEvenWord === inputArray[j].toLowerCase()){
                counter++
            }
        }
        if (counter % 2 === 1){
            finalArray.push(oddOrEvenWord)
        }
    }
    let unique = [...new Set(finalArray)]
    console.log(unique.join(' '))

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')