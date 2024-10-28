function accountBalance(input) { // input масива който получаваме има и стринг, и числа
    let total = 0;
    let index = 0;
    let command = input[index]; // получава стойността от input дали число, дали стринг
    index++;

    while (command !== "NoMoreMoney"){
        let addedMoney = Number(command); //преобразуваме стойността в число     
        if(addedMoney < 0){ //ако стойността е по-малка от нула изписваме грешка
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + addedMoney.toFixed(2)); //ако не е по-малка от нула отпечатваме колко пари са добавени
        total +=addedMoney; // добавяме парите към тотала

        command = input[index]; // присвояваме към command индексите от масива
        index++;
    }  
        
    console.log("Total: " + total.toFixed(2)); 
    
}

accountBalance(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"]);