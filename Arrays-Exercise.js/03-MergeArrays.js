function mergeArrays(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        let curr = arr1[i];
        let curr2 = arr2[i];

        if(i % 2 === 0){
            curr = Number(arr1[i]);
         curr2 = Number(arr2[i]);
        }
        newArr.push(curr + curr2);
    }
    console.log(newArr.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])