function uniquePin(a, b, c) {
    let maxA = a;
    let maxB = b;
    let maxC = c;

    let buff = "";

    for (let d1 = 0; d1 <= maxA ; d1++){
        for (let d2 = 2; d2 <= maxB ; d2++){
            let flag = 0;
            for( let i = 2; i <= d2; i++){
                if (d2 % i === 0) {
                    flag = 1;
                    break;
                }
                for (let d3 = 0; d3 <= maxC ; d3++){
                    if(d1%2===0 && d2>=1 && flag === 0 && d2<=7 && d3%2===0){
                         buff += `${d1}${d2}${d3}`;
                    }
                }
            }
        }
    }
    
        console.log(buff)



    }
    



uniquePin(3,
5,
5);
