function solve(input){
    let weaponName = input.shift().split('|');
    let command = input.shift().split(' ');
    let oddElements = [];
    let evenElements = [];

    while(command.length > 1){
        let action = command.shift();

        if(action == "Add"){
            let partical = command.shift();
            let index = Number(command.shift());

            if(index >= 0 && index < weaponName.length){
                weaponName.splice(index, 0, partical)
            }
        } else if ( action == 'Remove'){
            let index = Number(command.shift());
            if(index >= 0 && index < weaponName.length){
                weaponName.splice(index, 1)
            }
        } else if (action == 'Check' && command == 'Odd'){
for(let i = 1; i < weaponName.length; i += 2){
oddElements.push(weaponName[i]);
}
console.log(oddElements.join(' '));
        } else if (action == 'Check' && command == 'Even'){
            for(let i = 0; i < weaponName.length; i += 2){
                evenElements.push(weaponName[i])
            }
            console.log(evenElements.join(' '));
        }
        command = input.shift().split(' ');
    }
    console.log(`You crafted ${weaponName.join('')}!`);

}
// solve((["pa|Do|ha|mm|er", 
// "Remove 0", 

// "Add om 1", 

// "Check Even", 

// "Done"]) );
solve(['As|hb|ri|ng|er',
    'Remove 10',
   'Add lo 5',
    'Check Odd',
    'Done'])