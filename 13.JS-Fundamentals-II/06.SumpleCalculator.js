function calculator(firstNumber, secondNumber, operator){
    let addFunction = (firstNumber, secondNumber) => firstNumber + secondNumber
    let subtractFunction = (firstNumber, secondNumber) => firstNumber - secondNumber
    let multiplyFunction = (firstNumber, secondNumber) => firstNumber * secondNumber
    let divideFunction = (firstNumber, secondNumber) => firstNumber/ secondNumber
    if (operator === "add"){
        console.log(addFunction(firstNumber, secondNumber))
    } else if (operator === "subtract"){
        console.log(subtractFunction(firstNumber, secondNumber))
    } else if (operator === "multiply"){
        console.log(multiplyFunction(firstNumber, secondNumber))
    } else {
        console.log(divideFunction(firstNumber,secondNumber))
    }
}
calculator(5, 5, "multiply")