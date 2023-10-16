function sort(arr){
    let finalArr = [];
    let sortedArr = arr.sort((a,b) => a - b);

    while(sortedArr.length > 0){
        let bigNum = sortedArr.pop();
        let smallNum = sortedArr.shift();

        finalArr.push(bigNum, smallNum);

        
    }


    console.log(finalArr.join(' '));

}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94] )