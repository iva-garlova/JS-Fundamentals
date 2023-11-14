function hardWord(arr){
    let [letter, words] = arr;
    let letterWords = letter.split(' ');
    let missedGaps = letterWords.filter(word => word.includes('_'));
    
    for(let gap of missedGaps){
        if(!gap.endsWith('_')){
            gap = gap.slice(0, gap.length - 1)
        }
        let wordToFill = words.find(word => word.length == gap.length);
        letter = letter.replace(gap, wordToFill)

    }
    console.log(letter);
    
    
    

}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a__________.My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])