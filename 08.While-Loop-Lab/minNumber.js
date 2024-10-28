function minNumber(input) {
    let index = 0;
    let command = input[index]; // получава стойността от input дали число, дали стринг
    index++;
    let min = (Number.MAX_SAFE_INTEGER); //променлива която ни дава дъно, на най-малкото число в JS

    while (command !== "Stop"){
        let smallestNum = Number(command); 
        if (smallestNum < min){
            min = smallestNum;
        }
        command = input[index]; // присвояваме към command индексите от масива
        index++;
    }  
        
    console.log(min); 
}
 
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);