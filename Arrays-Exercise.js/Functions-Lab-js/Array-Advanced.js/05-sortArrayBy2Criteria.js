function sortArrayBy2Criteria(arr){
let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
console.log(result.join('\n'));
}
sortArrayBy2Criteria(
['alpha',
'beta',
'gamma'])