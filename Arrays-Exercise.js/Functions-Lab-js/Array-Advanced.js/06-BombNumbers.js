function bombNumbers(numbers, bombInfo){
    let [bombNumber, power] = bombInfo;

    while(numbers.includes(bombNumber)){
        let idx = numbers.indexOf(bombNumber);
        numbers.splice(Math.max(0, idx - power),power * 2 + 1)
    }
    let sum = 0;

    for(let num of numbers){
        sum += num
    }
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )