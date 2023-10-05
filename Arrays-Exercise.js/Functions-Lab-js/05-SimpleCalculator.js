function simpleCalculator(num1, num2, operator){
    let multiply = (a, b) => a * b;
    let divide = (a ,b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    result = 0;

    switch ( operator){
        case 'multiply': result = multiply(num1, num2); break;
        case 'divide' : result = divide(num1, num2);   break;
        case 'add' : result = add(num1, num2); break;
        case 'subtract' : result = subtract(num1, num2); break;
     }
     return result

}
//simpleCalculator(5, 5,'multiply');