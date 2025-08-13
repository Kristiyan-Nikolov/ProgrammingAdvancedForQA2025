//1. Add and Subtract

function addAndSubtract(array){
    var arrayModified = []; // this is how you declare an empty array in JS
    let sumOriginal = 0
    let sumModified = 0
    for (let i = 0; i < array.length; i++){ // loop through all elements, check if its even or odd.
        if (array[i] % 2 === 0){
            arrayModified[i] = array[i]+i // if even > add to its value its index position
        } else {
            arrayModified[i] = array[i]-i // if odd > sutract to its value its index position
        }
    }
    console.log(arrayModified) //print the modified array
    //console.log(array.join()) // check if the original array is still present 
    //sum modified and original array and print
    for (let i = 0; i < arrayModified.length; i++){
        sumModified += arrayModified[i]
    }
     for (let i = 0; i < array.length; i++){
        sumOriginal += array[i]
    }
    console.log(sumOriginal)
    console.log(sumModified)
    
}

addAndSubtract([5, 15, 23, 56, 35])

//Alternate version with no added array to modify things. Cleaner variant

function addAndSutractBetter(arr){
    let sum = 0
    let sumMod = 0
    for (let i = 0; i< arr.length; i++){
        sum += arr[i]
        if (arr[i] % 2 === 0){
            arr[i] +=i
        } else {
            arr[i] -=i
        }
        sumMod +=arr[i]
    }
    console.log(arr)
    console.log(sum)
    console.log(sumMod)
}
addAndSutractBetter([5, 15, 23, 56, 35])