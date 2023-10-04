function addAndSubstract(arr){
    let newArr = [];
    let oldSum = 0;
    let newSum = 0;

    for(let i = 0; i < arr.length; i++){
        let curNum = Number(arr[i]);
        oldSum += curNum
        if(curNum % 2 === 0){
            curNum += i;
            newArr.push(curNum);
        } 
        else {
            curNum -= i;
            newArr.push(curNum);
        }
        newSum += curNum
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);

}
addAndSubstract([5, 15, 23, 56, 35]);