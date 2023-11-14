function modernTimes(str){
    let words = str.split(' ').filter(words => words.includes('#') && words.length > 1);
    
    for(let word of words){
        word = word.slice(1);
        let isValid = true;

        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
                isValid = false;
            break;
            }
        }
        if(isValid){
            console.log(word);
        }
    }
    

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');