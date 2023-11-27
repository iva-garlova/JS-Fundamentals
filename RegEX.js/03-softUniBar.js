function softUniBar(input){
    let command = input.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let income = 0;


    while(command !== 'end of shift'){

        let match = command.match(pattern);

        if(match){
            let {name, product, count, price} = match.groups;
        
            let totalPrice = Number(count) * Number(price);
            income += totalPrice
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        
        }

        command = input.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);

}
softUniBar(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])