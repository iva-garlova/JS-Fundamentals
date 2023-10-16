function searchForANumber(list, numbers){

let elsMustBeTaken = Number(numbers[0]);
let elsMustBeDeleted = Number(numbers[1]);
let searchedNumber = Number(numbers[2]);

let searchedNumCount = 0;
let iterationCount = 0;
let newList = [];

for(let i = 0; i < list.length; i++){
    let element = list[i];
    iterationCount++;
    if(iterationCount <= elsMustBeTaken){
        newList.push(element)
    }
    if(iterationCount <= elsMustBeDeleted){
        newList.shift();
    }
   

}

for(let i = 0; i < newList.length; i++){
    if(newList[i] == searchedNumber){
        searchedNumCount++;
    }
}






    

console.log(`Number ${searchedNumber} occurs ${searchedNumCount} times.`);
}


//searchForANumber([5, 2, 3, 4, 1, 6],
    //[5, 2, 3])
    searchForANumber([7, 1, 5, 8, 2, 7],
        [3, 1, 5])