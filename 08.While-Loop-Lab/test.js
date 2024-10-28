function solve(input) {
    let index = 0;
    let value = input[index];
      
    while(value !== "Stop"){
        console.log(value); 
        index++; // задаваме инкрементация с + 1 върху index-а
        value = input[index]; // присвояваме новата стойност върху променливата  
    }
    
}

solve([11, 12, 13, 14, 15, "Stop"])