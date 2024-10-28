function holiday(input) {
    let holidayCost = Number(input[0]);
    let moneyBalance = Number(input[1]);

    let action = '';
    let amount = 0;
    let daysPassed = 0;
    let extraTotal = 0;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== "save"){
       
        command = Number(input[index]);
        daysPassed++;
        index ++;

        if ( daysPassed === 5){
            console.log(`You can't save the money.`)
            console.log(`${daysPassed}`);
            break;
        }

        command = input[index];
        index ++;

        if (command === "save"){
            command = input[index];
            index = index + 2;
            amount = Number(input[index]);
            extraTotal+=amount;
            index++;
        } else if (command === "spend"){
            command = input[index];
            index = index + 2;
            amount = Number(input[index]);
            extraTotal-=amount;
            index++;
        }

       
    }
    
    if (moneyBalance + extraTotal >= holidayCost) {
        console.log(`You saved the money for ${daysPassed} days.`)
    }

    
}

holiday(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);