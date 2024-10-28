function equalSumEvenOdd(a, b) {
    let n1 = a;
    let n2 = b;

   let buff = "";

    for (let i = n1; i <= n2; i++){
        let sumEvenIndex = 0;
        let sumOddIndex = 0;

        let iAsString = i + ""; //превръщаме числото в низ, чрез конкатениране
    
        for (let index = 0; index < iAsString.length; index++){
            let digit = Number(iAsString[index]);
            
            if (index % 2 === 0){          
                sumEvenIndex+=digit;
            } else {
                sumOddIndex+=digit;
            }
        }
        
        if(sumEvenIndex === sumOddIndex){
            buff += i + " ";        
        }
    }
    
    console.log(buff);

}

equalSumEvenOdd(100000,
    100050);