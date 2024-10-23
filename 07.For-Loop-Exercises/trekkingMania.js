function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimand = 0;
    let k2 = 0;
    let everest = 0;
    let sum = 0;

    for (let i = 1; i < groupCount + 1; i++){
        let climbersCount = Number(input[i]);
        sum += climbersCount;
        
        if (climbersCount >=1 && climbersCount <= 5){
            musala += Number(input[i]);
        } else if (climbersCount >= 6 && climbersCount <= 12){
            monblan += Number(input[i]);
        } else if (climbersCount >= 13 && climbersCount <= 25){
            kilimand += Number(input[i]);
        } else if (climbersCount >= 26 && climbersCount <= 40){
            k2 += Number(input[i]);
        } else if (climbersCount >= 41 && climbersCount <= 1000){
            everest += Number(input[i]);
        } 
    }
    
    let p1 = (musala/sum) * 100;
    let p2 = (monblan/sum) * 100;
    let p3 = (kilimand/sum) * 100;
    let p4 = (k2/sum) * 100;
    let p5 = (everest/sum) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);