// 2. Towns

// You’re tasked to create and print objects from a text table.

// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
// INPUT 
// ['Sofia | 42.696552 | 23.32601',

// 'Beijing | 39.913818 | 116.363625']
// OUTPUT 
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }

// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

function towns(array){
    let towns = []
    class Town{
        constructor(townName, latitude, longtitude){
            this.town = townName
            this.latitude = latitude
            this.longtitude = longtitude
        }
        printTown(){
            console.log(`{ town: '${this.town}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longtitude.toFixed(2)}' }`)
        }
    }
    for (let i = 0; i < array.length; i++){
        let inputData = array[i].split(' | ')
        let town = inputData[0]
        let latitude = Number(inputData[1])
        let longtitude = Number(inputData[2])
        towns.push(new Town(town, latitude, longtitude))
    }
    for (const element of towns) {
        element.printTown()
    }

}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])