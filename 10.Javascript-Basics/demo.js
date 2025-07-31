//1. Multiply the Number by 2

function solve(num){
    return num*2
}
console.log(solve(5))

//2. Student Information

function studentInfo(name, age, grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}
studentInfo('Kriso', 18, 5.345)

//3. Excellent Grade

function gradeCheck (grade){
    if (grade >= 5.5){
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}
gradeCheck(5.4)

//4. Month Printer

function monthPrinter(num){
    let result;
    switch(num){
        case 1:
            result = "January"
            break
        case 2:
            result = "February"
            break
        case 3:
            result = "March"
            break
        case 4:
            result = "April"
            break
        case 5:
            result = "May"
            break
        case 6:
            result = "June"
            break
        case 7:
            result = "July"
            break
        case 8:
            result = "August"
            break
        case 9:
            result = "September"
            break
        case 10: 
            result = "October"
            break
        case 11:
            result = "November"
            break
        case 12:
            result = "December"
            break
        default:
            result ='Error!'
            break
    }
    console.log(result)
}
monthPrinter(3)

//5. Math Operations

function mathOperations(a, b, operation){
    switch(operation){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a*b
            break
        case '/':
            return a/b
            break
        case '%':
            return a%b
            break
        case '**':
            return a**b
            break
        default:
            console.log('Error!')
            break

    }
    
}

console.log(mathOperations(3, 2, '+'))
console.log(mathOperations(3, 2, '-'))
console.log(mathOperations(3, 2, '*'))
console.log(mathOperations(3, 2, '/'))
console.log(mathOperations(3, 2, '%'))
console.log(mathOperations(3, 2, '**'))

//6. Largest Number

function largestNumber(a, b, c){
    if (a > b && a > c){
        console.log(`The largest number is ${a}.`)
    } else if ( b > c) {
        console.log(`The largest number is ${b}.`)
    } else {
        console.log(`The largest number is ${c}.`)
    }
}

largestNumber(3, 6, 4)

//7. Theatre Promotions

function theatrePromos(date, age){
    let result;
    switch (date){
            case 'Weekday':
                if (age < 0 || age > 122){
                    console.log('Error!')
                    return
                    
                } else if (age >= 0 && age <=18){
                    result = 12} else if (age > 18 && age <=64){
                        result = 18;} else if (age > 64 && age <=122){
                            result =12;
                        }
                        break
            case 'Weekend':
                 if (age < 0 || age > 122){
                    console.log('Error!')
                    return
                    
                } else if (age >= 0 && age <=18){
                    result = 15} else if (age > 18 && age <=64){
                        result = 20;} else if (age > 64 && age <=122){
                            result =15;
                        }
                        break
            case 'Holiday':
                 if (age < 0 || age > 122){
                    console.log('Error!')
                    return
                    
                } else if (age >= 0 && age <=18){
                    result = 5} else if (age > 18 && age <=64){
                        result = 12;} else if (age > 64 && age <=122){
                            result =10}
                            break
    }
    console.log(`${result}$`)
}
theatrePromos('Weekday', -42)

//08. Circle Area

function circleArea(number){
    let result;
    let inputType = typeof(number)
    if (inputType === "number"){
        result = number**2*3.14159
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeof number}.`)
        return

    }
    console.log(result.toFixed(2))
}
circleArea(5)
circleArea(true)

//9. Numbers from 1 to 5

function loopNewLine(){
    for (let i=1; i<=5; i++){
        console.log(i)
    }
}
loopNewLine()

//10. Numbers from M to N

function printNumbersFromMtoN(m, n){
    for (let i = m; i >= n; i--){
        console.log(i)
    }
}
printNumbersFromMtoN(6, 2)
printNumbersFromMtoN(4, 1)