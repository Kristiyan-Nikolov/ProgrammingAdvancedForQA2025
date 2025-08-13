//9. Party Time
// 2 reservation lists which I will find the index of Party beforehand
// create two arrays and push values in them, one before party, one after party
// compare and see IF the person is in both arrays > break and proceed with the next one
// will need another array to store people that are present in the reservation list but who did not attend the party
// sort the array by VIPSs first (they will have a number before their name) with default sort?
// print the amount of people who didn't attend
// print the sorted array - one person per n/

function partyTime(input){
    var reservationList = []
    var partyList = []
    var unattendedListNormal = []
    var unattendedListVip = [] // 4 arrays will be enough
    let indexSplit = input.indexOf('PARTY') // find the index of tha will split the array
    for (let i = 0; i < indexSplit; i++){ 
        reservationList.push(input[i]) // push the reservation list till the index split
    }
    for (let j = indexSplit+1; j < input.length; j++){ // push the attending list from the index split till the end
        partyList.push(input[j])
    }
    
    



    for (let i = 0; i < reservationList.length; i++){ // loop through the reservation list and take one element
        let isUnique = true // this is how we will decide if we add the element. If the second loop doesn't enter the IF check we will proceed to add the value
        let guestCheck = reservationList[i] 
        for (let j = 0; j < partyList.length; j++){
            if (guestCheck === partyList[j]){ // check if both match perfectly
                isUnique = false // if they do isUnique becomes false in order to skip adding that element below
                break // break it since we have no use to check every other element
            }
            // fatal mistake, I should be removing the elements in order to avoid duplicates ruining my lists
        }
        if (isUnique){ // check if it is still true 
            const char = guestCheck[0] // make the guest check into an array of chars
            const code = char.charCodeAt(0) // get the first char of the word
            if (code >= 48 && code <= 57){ // stupid way? to check if the first element is a number
                unattendedListVip.push(guestCheck) // if it is > VIP
            } else{
                unattendedListNormal.push(guestCheck) // if not > Normal guest
            }
            
        }
    }
    //unattendedList.sort() no need for sort
    let guestsNumber = unattendedListVip.length + unattendedListNormal.length // print both lengths 
    console.log(guestsNumber) 
   for (const element of unattendedListVip) {
        console.log(element)
   }
   for (const element of unattendedListNormal) {
        console.log(element)
   }
   //loop and print em

   // chatGPT told me I will have a big issue with duplicates

}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])