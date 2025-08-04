//1. Sum First and Last Array Elements

function sumFirstAndLastElement(array){
    let firstElement = Number(array[0])
    let lastElement = Number(array[array.length-1])
    return firstElement + lastElement
}

console.log(sumFirstAndLastElement([20, 30, 40]))
console.log(sumFirstAndLastElement([10, 17, 22, 33]))
console.log(sumFirstAndLastElement([11, 58, 69]))

//2. Day of the Week

function dayOfWeek(number){
    switch (number){
        case 1:
            console.log('Monday')
            break
        case 2: 
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            break
        case 6: 
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            break
        default:
            console.log('Invalid day!')
            break;

    }
}

dayOfWeek(6)
dayOfWeek(1)
dayOfWeek(-1)
dayOfWeek(8)

//Alternative with an array

function dayOfWeekArray(num){
    let result
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (day >= 1 && day <=7){
        result = days[day-1]
    } else {
        console.log('Invalid day!')
        return
    }
    console.log(result)
}
dayOfWeek(6)
dayOfWeek(1)
dayOfWeek(-1)
dayOfWeek(8)

//3. Reverse an Array of Numbers

function reverse(n, inputArr){
    let resultArr=[];
    for (let i= 0; i <n; i++){
        resultArr[i] = inputArr[i]
    }
    resultArr.reverse();
    let output = ''
    console.log(resultArr.join(' '))
}

reverse(3, [1, 2, 3, 4, 5, 6])

//4. Reverse In Place

function reverseInPlace(array){
 for (let i = 0; i < array.length/2; i++){
    let currentElement = array[i]
    array[i] = array[array.length-1-i]
    array[array.length-1-i] = currentElement
 }
console.log(array.join(' '))

}

reverseInPlace([1, 2, 3, 4, 5, 6])


//5. Phone Book

function phoneBook(input){
    const book = {}
    for (const entry of input){
        const [name, number] = entry.split(' ')
        book[name] = number;
    }
    for (const name in book){
        console.log(`${name} -> ${book[name]}`)
    }
}

phoneBook(['Kriso 123213', 'Asia 234535'])

//6. Meetings

function meetings(array){
    const bookMetings = {};
    for (const entry of array){
        const [weekday, name] = entry.split(' ');
        if (bookMetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`)
        } else {
        bookMetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`)
        }
    }
    for (const entry in bookMetings){
        console.log(`${entry} -> ${bookMetings[entry]}`)
    }

}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])

//7. Adress Book

function addressBook(array){
    const addressBooks = {}
    for (const entry of array){
        const [name, address] = entry.split(':')
        addressBooks[name] = address
    }
    const sortedNames = Object.keys(addressBooks).sort()
    for (const entry of sortedNames){
        console.log(`${entry} -> ${addressBooks[entry]}`)
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])


