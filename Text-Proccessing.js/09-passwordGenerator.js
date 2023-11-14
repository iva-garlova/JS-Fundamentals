function passwordgenerator(str){
    let [str1 , str2, word] = str;
    let concateStr = str1 + str2;

    let vowels = ['a', 'o', 'u', 'i', 'e'];
    let index = 0;

    for(let el of concateStr){
    if(vowels.includes(el)){
    
        concateStr = concateStr.replace(el, word[index].toUpperCase());
        index++;

        if(index >= word.length){
            index = 0;
        }
    }
    }
    let password = concateStr.split('').reverse().join('')
   console.log(`Your generated password is ${password}`);    
}
passwordgenerator([
    'ilovepizza',
    'ihatevegetables',
     'orange'])