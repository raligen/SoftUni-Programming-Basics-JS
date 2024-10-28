function specialNums(arg) {
    let n = arg;

    let buff = "";
    
    
    for(let currentNum = 1111; currentNum <=9999; currentNum++){
        let isSpecial = true;
       
        let currentNumAsString = currentNum + "";     

        for (let index = 0; index < currentNumAsString.length; index++){
            let digit = currentNumAsString[index];
            
            if(n % digit !== 0){
                    isSpecial = false;
                    break;
            }
                    
        }

        if(isSpecial){
            buff += currentNum + " ";    
        }
    }

    console.log(buff);
}

specialNums(3);