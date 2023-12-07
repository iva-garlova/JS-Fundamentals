function solve(input){
    let sizeOfSide = Number(input.shift());
    let numberOfSheets = Number(input.shift());

    let area = sizeOfSide * sizeOfSide * 6;
    let totalareaCovered = 0;
    let count = 0

    for(let i = 0; i <= input.length; i+= 2){
        count ++
        if(count > numberOfSheets){
            break;
        }
        let oneSheetArea = Number(input[i] * input[i + 1])
        if (count % 3 == 0) {
            oneSheetArea *= 0.75;
          }
          if (count % 5 !== 0) {
            totalareaCovered += oneSheetArea;
          }
    }
    let isEnough = totalareaCovered >= area;
    
    let percentageCovered = ((totalareaCovered - area)/ totalareaCovered ) * 100;
    let percentageSearched = (totalareaCovered / area) * 100;
    let persentageNeeded = 100 - percentageSearched


if(isEnough){
    console.log("You've covered the gift box!");
    console.log(`${percentageCovered.toFixed(2)}% wrap paper left.`);
} else {
console.log("You are out of paper!");
console.log(`${persentageNeeded.toFixed(2)}% of the box is not covered.`);
}
  

}
// solve((["10", 

// "5", 

// "3", 

// "0.5", 

// "2.4", 

// "5", 

// "3.7", 

// "1", 

// "3", 

// "34.7", 

// "5", 

// "80"]));
solve((["2", 

"2", 

"0.2", 

"7", 

"6", 

"8.5"]) )