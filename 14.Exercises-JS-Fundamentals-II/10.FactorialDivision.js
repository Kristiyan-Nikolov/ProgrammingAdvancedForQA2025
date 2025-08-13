// 10. Factorial Division

// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.

function factorialDivision(a, b){
    let largerFactorial = 1
    let smallerFactorial = 1
    for(let i = a; i > 1; i--){
        largerFactorial *=Number(i)
    }
    for(let j = b; j > 1; j--){
        smallerFactorial *=Number(j)
    }
    let sum =largerFactorial/smallerFactorial
    console.log(sum.toFixed(2))

}

factorialDivision(5, 2)