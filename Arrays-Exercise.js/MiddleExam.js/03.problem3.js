function solve(input){
    let originalDeck = input.shift().split(':');
    let command = input.shift();
    let newDeck = [];

    while(command !== 'Ready'){
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action == 'Add'){
            let cardName = tokens.shift();
            if(originalDeck.includes(cardName)){
                newDeck.push(cardName)
            } else {
                console.log("Card not found.");
            }
        } else if( action == 'Insert'){
            let cardName = tokens.shift();
            let index = Number(tokens.shift());
            if( originalDeck.includes(cardName) && index >= 0 && index <= newDeck.length){
                newDeck.splice(index, 0, cardName)

            } else {
                console.log('Error!');
            }
        } else if (action == 'Remove'){
            let cardName = tokens.shift();
            if(newDeck.includes(cardName)){
                let indexToremove = newDeck.indexOf(cardName);
            newDeck.splice(indexToremove, 1)

            } else {
                console.log("Card not found.");
            }
        } else if (action == "Shuffle"){
 newDeck = newDeck.reverse();
        } else if ( action == 'Swap'){
            let card1 = tokens.shift();
            let card2 = tokens.shift();
            let index1 = newDeck.indexOf(card1);
            let index2 = newDeck.indexOf(card2);
            let temp = newDeck[index1];
            newDeck[index1] = newDeck[index2];
            newDeck[index2] = temp;
        }



        command = input.shift();
    }
    console.log(newDeck.join(' '));

} 
//solve(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite", 

// "Add Moonfire", 

// "Add Bite", 

// "Insert Claw 0", 

// "Swap Claw Moonfire", 

// "Remove Bite", 

// "Ready"]);
solve(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk", 

"Add UndergroundSea", 

"Add Timetwister", 

"Remove Wrath", 

"Add CopyArtifact", 

"Shuffle deck", 

"Ready"]);