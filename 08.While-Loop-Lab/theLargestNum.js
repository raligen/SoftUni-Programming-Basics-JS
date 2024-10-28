function theLargestNum(input) {
    let index = 0;
    let command = input[index]; // получава стойността от input дали число, дали стринг
    index++;
    let max = (Number.MIN_SAFE_INTEGER); //променлива която ни дава дъно, на най-малкото число в JS

    while (command !== "Stop"){
        let largestNum = Number(command); 
        if (largestNum > max){
            max = largestNum;
        }
        command = input[index]; // присвояваме към command индексите от масива
        index++;
    }  
        
    console.log(max); 
}

theLargestNum(["-10",
"-30",
"Stop"]);
    