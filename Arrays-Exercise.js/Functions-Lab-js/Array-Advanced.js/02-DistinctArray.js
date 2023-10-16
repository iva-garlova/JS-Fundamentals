function distinctArray(arr){
    let uniqueNums = []

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];

        if(!uniqueNums.includes(num)){
            uniqueNums.push(num)
        
        }
      
    }
    console.log(uniqueNums.join(' '));

}
//distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])