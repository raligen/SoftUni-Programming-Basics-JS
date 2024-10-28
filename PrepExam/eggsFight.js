function eggsFight(input) {
    let eggsCount1st = Number(input[0]);
    let eggsCount2nd = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;
    
    while(command !== "End"){
        let currentCommand = command;
               
        if(currentCommand === "one"){
            eggsCount2nd = eggsCount2nd - 1;
            if (eggsCount2nd === 0){
                console.log(`Player two is out of eggs. Player one has ${eggsCount1st} eggs left.`);
                return;
            }            
        } else {
            eggsCount1st = eggsCount1st - 1;
            if (eggsCount1st === 0){
                console.log(`Player one is out of eggs. Player two has ${eggsCount2nd} eggs left.`);
                return;
            }
            
        }

        command = input[index];
        index++;

    }
    console.log(`Player one has ${eggsCount1st} eggs left.`);
    console.log(`Player one has ${eggsCount2nd} eggs left..`);

}

eggsFight(["6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"])