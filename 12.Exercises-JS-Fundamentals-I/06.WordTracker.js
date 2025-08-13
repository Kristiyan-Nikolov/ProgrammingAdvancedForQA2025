function wordTracker(array){
    const tracker = {}
    let counter = array[0].split(' ')
    for (const entry of counter){
        tracker[entry] = 0;
    }
    for (let i = 1; i < array.length; i++){
        let entry = array[i]
        if (tracker.hasOwnProperty(entry)){
            tracker[entry]++
        }
    }
    Object.entries(tracker)
        .sort((a,b)=> b[1] - a[1])
        .forEach(([word, count])=>{console.log(`${word} - ${count}`)})
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])