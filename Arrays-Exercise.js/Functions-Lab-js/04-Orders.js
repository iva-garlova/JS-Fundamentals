function orders(order, count){
    let price = 0;

    switch(order){
        case 'water': price += count;
        break;
        case 'coffee': price = 1.50 * count;
        break;
        case 'coke': price = 1.40 * count;
        break;
        default : price = 2 * count;
        break;
    }
console.log(price.toFixed(2));

}
orders("water", 5 )
// coffee - 1.50
// • water - 1.00
// • coke - 1.40
// • snacks - 2.00