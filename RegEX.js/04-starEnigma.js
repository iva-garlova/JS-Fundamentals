function starEnigma(input){
    let commandsCount = Number(input.shift());
    
    let decryptedMsgs = [];
    let pattern = /[star]/gi

    for(let i = 0; i < commandsCount; i++){
        let msg = input[i];
        let decryptedMsg = ''

        let match = msg.match(pattern);

        if(match){
            let count = match.length;

        for(let char of msg){
            let code = char.charCodeAt();
            code -= count;

            let newChar = String.fromCharCode(code);
            decryptedMsg += newChar;
        }

        } else {
            decryptedMsg = msg
        }
        decryptedMsgs.push(decryptedMsg)
    }

    let planetPattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*->(?<soldierCount>\d+)/

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for(let msg of decryptedMsgs){
        let match = msg.match(planetPattern);

        if(match){
            let {planetName, attackType} = match.groups;

            if(attackType == 'A'){
                attackedPlanets.push(planetName)
            } else {
                destroyedPlanets.push(planetName)
            }
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planetName => console.log(`-> ${planetName}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planetName => console.log(`-> ${planetName}`));
    }


    starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])