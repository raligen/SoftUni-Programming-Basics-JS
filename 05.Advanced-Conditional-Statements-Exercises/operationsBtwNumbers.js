function operationsBtwNumbers(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let result;
    let evenOrOdd;

    switch (operator){
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
        case "%": result = n1 % n2; break;
    }
    
    if (result % 2 === 0){
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }
    
    if (operator === "+" || operator === "-" || operator === "*"){
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    }

    if (operator === "/" && n2 !== 0){
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }

    if (operator === "%" && n2 !== 0){
        console.log(`${n1} % ${n2} = ${result}`);
    }

    if (n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
    }
    
}

operationsBtwNumbers(10, 0, "%");