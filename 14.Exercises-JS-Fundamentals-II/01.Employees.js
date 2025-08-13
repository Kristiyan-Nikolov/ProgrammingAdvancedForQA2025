// 1. Employees

// You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. 
// Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following 
// "Name: {employeeName} -- Personal Number: {personalNum}"
// INPUT
// ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']
// OUTPUT
// Name: Silas Butler -- Personal Number: 12 
// Name: Adnaan Buckley -- Personal Number: 14 
// Name: Juan Peterson -- Personal Number: 13 
// Name: Brendan Villarreal -- Personal Number: 18

function employees(array){
    let employees = []
    class Employee{
        constructor(name, number){
            this.name = name
            this.number = number
        }
        printEmployee(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`)
        }
    }
    for (let i = 0; i < array.length; i++){
        let name = array[i]
        let number = array[i].length
        employees.push(new Employee(name, number))
    }
    for (const entry of employees) {
        entry.printEmployee()
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])