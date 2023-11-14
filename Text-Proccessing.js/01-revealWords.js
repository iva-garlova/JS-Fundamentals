function revealWords(word, text){
    let words = word.split(', ');

for(let word of words){
    let size = word.length;
    let template = '*'.repeat(size);

    text = text.replace(template, word)
}
console.log(text);

    

}
revealWords('great',

'softuni is ***** place for learning new programming languages');

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');