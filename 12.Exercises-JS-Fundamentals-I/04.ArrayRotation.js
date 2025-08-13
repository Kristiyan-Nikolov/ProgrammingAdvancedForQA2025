//04. Array Rotation 
function arrayRotation(arr, rotations){//using var for the arrays since alpha judge is trolling me
    if (rotations > arr.length){ //forgot to check if the rotation number is higher than the max index
        rotations = rotations % arr.length // get the mod of rotation and array length
    } 
    
    //console.log(rotations) check rotation number 
    var modifiedLastElements = arr.slice(rotations) //32, 61, 21
    var modifiedArrayFirstElements = arr.slice(0, rotations) // 51, 47
    var modifiedArray = modifiedLastElements.concat(modifiedArrayFirstElements) //32, 61, 21 concat 51, 47
    console.log(modifiedArray.join(' ')) // easy
}
arrayRotation([2, 4, 15, 31, 41], 7)
