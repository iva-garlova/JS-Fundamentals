function wordTracker(arr){
    let wordsToFind = arr.shift().split(' ');

    let list = {};

    for(word of wordsToFind){
        list[word] = 0;
    }

    for(let word of arr){
        if(word in list){
            list[word]++;
        }
    }

    let entries = Object.entries(list).sort((a, b) => b[1] - a[1]);

    for(let [word , count] of entries){
        console.log(`${word} - ${count}`);
    }
    

 

}