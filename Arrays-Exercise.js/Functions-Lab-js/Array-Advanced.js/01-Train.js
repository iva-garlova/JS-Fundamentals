function train(arr){
    let wagons = arr[0].split(' ').map(Number)
    let maxCapacity = Number(arr[1]);
    

    
    for(let i = 2; i < arr.length; i++){
        let token = arr[i];
let command = token.split(' ');
if(command[0] == 'Add'){
    let passengers = Number(command[1]);
    wagons.push(passengers)
}
else {
    let passengers = Number(command[0])
    for(let i = 0; i < wagons.length; i++){
  if(wagons[i] + passengers <= maxCapacity){
            wagons[i] += passengers;
            break;
        }
    }
}
        
    
    }
    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);