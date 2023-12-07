function solve(input){
    let str = input.shift();
    let command = input.shift().split(' ');
    let newStr = ''
    
    while(command != 'Done'){
if(command[0] == 'TakeOdd'){
    for(let i = 1; i < str.length; i+=2){
        let idx = str[i];
            newStr += idx;
 }
 str = newStr
 console.log(str);
    } else if (command[0] == 'Cut'){
        let idx = Number(command[1]);
        let len = Number(command[2]);
        let sub = str.substring(idx, idx + len);
        let modyfiedStr = str.replace(sub, '');
        str = modyfiedStr;
        console.log(str);
    } else if ( command[0] == 'Substitute'){
        let substring = command[1];
        let substitute = command[2];

        if(str.includes(substring)){
            let result = str;
            let newStr = '';
            while(result.includes(substring)){
             newStr =  result.replace(substring, substitute);
             result = newStr;
            }
            str = newStr
            console.log(str);
            
            
        } else {
            console.log("Nothing to replace!");
        }
    }

        command = input.shift().split(' ');
    }
console.log(`Your password is: ${str}`);

}
// solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",  

// "TakeOdd", 

// "Cut 15 3", 

// "Substitute :: -", 

// "Substitute | ^", 

// "Done"]);

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", 

"TakeOdd", 

"Cut 18 2", 

"Substitute ! ***", 

"Substitute ? .!.", 

"Done"])