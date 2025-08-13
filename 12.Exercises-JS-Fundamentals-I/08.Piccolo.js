//8. Piccolo

function piccolo(input){
    var finalArray = []
    for (let i = 0; i < input.length; i++){
        let statusAndID = input[i].split(', ')
        let status = statusAndID[0]
        let carID = statusAndID[1]
        if (status === 'IN' && !finalArray.includes(carID)){
            finalArray.push(carID)
        } else if(status === 'OUT'){
            let position = finalArray.indexOf(carID)
            if (position !==-1){
                finalArray.splice(position, 1)
            }
        }
        
    }  
    finalArray.sort()
    if (finalArray.length === 0){
        console.log('Parking Lot is Empty')
    } else {
        for (let carNumber of finalArray){
            console.log(carNumber)
        }
    }
    //console.log(finalArray) 
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])