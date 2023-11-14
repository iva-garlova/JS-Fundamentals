function stringSubstracting(word, text){

    let splitedText = text.toLowerCase().split(' ');
    if(splitedText.includes(word)){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
    
}
stringSubstracting('javascript',
'JavaScript is the best programming language');

stringSubstracting('python',
'JavaScript is the best programming language');