function barcodeGen(start, end) {

    let buff = "";

    for (let number = start; number <= end; number++){
        let isOdd = true;
         
        let numberAsString = number + "";
        
        let index = 0;
        let digit = Number(numberAsString[index]);
        index++;

        while (digit % 2 !== 0){
            buff += number + " ";
            console.log(buff);
        
            if(digit % 2 === 0){
                isOdd = false;
                break;
            }
        
            digit = numberAsString[index];
            index++;
        }
    }
    
}

barcodeGen(3256,
    6579);
