function formatGrade(grade){
if (grade < 3){
    console.log(`Fail (2)`);

}  else if (grade <= 3.49){
    console.log(`Poor (${grade.toFixed(2)})`);
} else if ( grade <= 4.49){
    console.log(`Good (${grade.toFixed(2)})`);
} else if (grade <= 5.49){
    console.log(`Very good (${grade.toFixed(2)})`);
} else {
    console.log(`Excellent (${grade.toFixed(2)})`);
}

}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
formatGrade(5.70);
// < 3.00 - "Fail"
// • >= 3.00 and < 3.50 - "Poor"
// • >= 3.50 and < 4.50 - "Good"
// • >= 4.50 and < 5.50 - "Very good"
// • >= 5.50 - "Excellent"