function maxNumber(arr){
    let n = arr[arr.length-1];
    let newArr = [n]

    for(let i = arr.length - 1; i >= 0; i--){
        let num = arr[i];
        let nextNum = arr[i-1];
        if(nextNum > num && nextNum > n){
            newArr.push(nextNum);
        }
    
    }
    console.log(newArr.reverse().join(' '));


}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
 maxNumber([41, 41, 34, 20]);
 maxNumber([27, 19, 42, 2, 13, 45, 48]);