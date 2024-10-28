function sumPrimeAndNon(input) {
    let index = 0;
    let currentItem = input[index];
    index++;
 
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentItem !== "stop"){
       
        let currentNum = Number(currentItem);
       
        if (currentNum < 0){
            console.log("Number is negative.");
            currentItem = input[index]; //предефинираме и продължаваме 
            index++;
            continue;
        }
       
        let isPrime = true;     

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime){
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }

        currentItem = input[index]; // тук ъпдейтваме командата!!!, за да може тя да продължи и да нямаме безкраен цикъл
        index++;

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}




sumPrimeAndNon(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);