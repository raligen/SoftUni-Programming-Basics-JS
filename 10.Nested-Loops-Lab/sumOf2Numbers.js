function sumOf2Numbers(a, b, c) {
   let start = Number(a);
   let end = Number(b);
   let magicNumber = Number(c);
   
   let isFound = false;
   let counter = 0;
   
   for (let x = start; x <=end; x++){
        for (let y = start; y <=end; y++){
            counter++; // колко пъти е минала проверка
            if (x + y === magicNumber){
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        } 
        if(isFound) {
            break;
        }
   }

   if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
   }
}

sumOf2Numbers(23, 24, 20);

// if ( a!==b && a! == c && c !==b){
//     counter++;
//     if ()
// }