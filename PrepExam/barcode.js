function barcode(start, end) {

    let n1 = Number(start);
    let n2 = Number(end);
    let n1AsString = String(n1);
    let n2AsString = String(n2);

    let startA = Number(n1AsString[0]);
    let startB = Number(n1AsString[1]);
    let startC = Number(n1AsString[2]);
    let startD = Number(n1AsString[3]);

    let endA = Number(n2AsString[0]);
    let endB = Number(n2AsString[1]);
    let endC = Number(n2AsString[2]);
    let endD = Number(n2AsString[3]);

    let buff = ""

    for (let a = startA; a <= endA; a++){
        for (let b = startB; b <= endB; b++){
            for (let c = startC; c <= endC; c++){
                for (let d = startD; d <= endD; d++){
                    if(a%2!==0 && b%2!==0 && c%2!==0 && d%2!==0){
                        buff += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(buff)

}
barcode(2345, 6789);