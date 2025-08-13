function partyTime(input){
    var reservationList = []
    var partyList = []
    var unattendedListNormal = []
    var unattendedListVip = [] // 4 arrays will be enough
    let indexSplit = input.indexOf('PARTY') // find the index of tha will split the array
    for (let i = 0; i < indexSplit; i++){ 
        reservationList.push(input[i]) // push the reservation list till the index split
    }
    // easier way to fill in the second list, eliminates second loop
    partyList = input.slice(indexSplit+1)
    for (const guest of partyList){
        const index = reservationList.indexOf(guest) // we will take the atendants of the party (since we know they attended) and we will leverage it by removing elements from the reservation list
        if (index !== -1){
            reservationList.splice(index, 1) // we use the party guest list to remove every occurance in reservation list
        }// basically the reservation list will be the unnatended list by proxy > but we still need to place em in VIP/Normal arrays
    } 
    for (const guest of reservationList){
        const firstChar = guest[0]
        const code = firstChar.charCodeAt(0) // take the char and convert it to ASCII code
        if (code >= 48 && code <=57){ // if check between the ASCII code for numbers 48 <= x <= 57
            unattendedListVip.push(guest)
        } else {
            unattendedListNormal.push(guest)
        }
    }
    // print total number of both arrays and then print VIPs then normals
    let unattendies = unattendedListVip.length + unattendedListNormal.length
    console.log(unattendies)
    for (const vip of unattendedListVip){
        console.log(vip)
    }
    for (const normal of unattendedListNormal){
        console.log(normal)
    }
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])