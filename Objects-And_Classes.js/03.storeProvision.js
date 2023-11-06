function storeProvision(stock, productsNew){
    let products = {}
    
    for(let i = 0; i < stock.length; i+= 2){
        let product = stock[i];
        let qnty = Number(stock[i + 1]);
    
    products[product] = qnty;
    }
    for(let j = 0; j < productsNew.length; j += 2){
        let product = productsNew[j];
        let qnty = Number(productsNew[j + 1]);
    
        if(product in products){
    products[product] += qnty
        } else{
            products[product] = qnty;
        }
    }
    let entries = Object.entries(products);
    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    }
   