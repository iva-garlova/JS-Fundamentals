function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            let secondNum = arr[k];
            if (firstNum + secondNum == num) {
                console.log(`${firstNum} ${secondNum}`);
            }

        }



    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6)