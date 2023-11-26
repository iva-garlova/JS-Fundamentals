function furniture(input){
    let totalPrice = 0;
    let items = []

let command = input.shift();
let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qnty>\d+)/;

while(command != 'Purchase'){
let matches = command.match(pattern);

if(matches){
    let {name, price, qnty} = matches.groups;

    let furniturePrice = Number(price) * Number(qnty);
    totalPrice += furniturePrice
    items.push(name);
}


command = input.shift();
}
console.log('Bought furniture:');

if(items.length > 0){
    console.log(items.join('\n'));
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);

// furniture(['>>Laptop<<312.2323!3',

// '>>TV<<300.21314!5',

// '>Invalid<<!5',

// '>>TV<<300.21314!20',

// '>>Invalid<!5',

// '>>TV<<30.21314!5',

// '>>Invalid<<!!5',

// 'Purchase'])