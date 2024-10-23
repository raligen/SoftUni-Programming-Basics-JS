function histogram(input) {
    let n = input[0];
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;
    
    for (let i = 1; i <= n; i++){
        let currentNum = input[i];

        if (currentNum < 200) {
            countP1++;
        } else if (currentNum >= 200 && currentNum<= 399){
            countP2++;
        } else if (currentNum>= 400 && currentNum <= 599){
            countP3++;
        } else if (currentNum>= 600 && currentNum <= 799){
            countP4++;
        } else if (currentNum>=800){
            countP5++;;
        }
    }

    let p1 = (countP1 / n)  * 100;
    let p2 = (countP2 / n)  * 100;
    let p3 = (countP3 / n)  * 100;
    let p4 = (countP4 / n)  * 100;
    let p5 = (countP5 / n)  * 100;
    
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram([3,1,2,999])