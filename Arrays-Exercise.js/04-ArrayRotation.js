function arrayRotation(arr, rotationCount){
    let newArr = [];

    for(i = 0; i < rotationCount; i++){
        let curr = arr[0];
        for(let j = 1; j < arr.length; j++){
            newArr.push(arr[j])
        }
        newArr.push(curr);
        arr = newArr;
        newArr = []
    }
    console.log(arr.join(" "));

}
arrayRotation([51, 47, 32, 61, 21], 2);