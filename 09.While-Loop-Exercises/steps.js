function steps(input) {
    let stepsAim = 10000;
    let stepsTotal = 0;
    
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Going home"){ 
        stepsTotal += Number(command);
        command = (input[index]);
        index++; 
        

        if (stepsTotal >= stepsAim){
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsTotal - stepsAim} steps over the goal!`);
            break;
        }

    }

    if(command === "Going home"){
        let homeSteps = 0;

        command = Number(input[index]);
        index = index + 1;

        homeSteps += command;

        if((homeSteps + stepsTotal) >= stepsAim){
            console.log(`Goal reached! Good job!`);
            console.log(`${(stepsTotal + homeSteps) - stepsAim} steps over the goal!`);
        } else {
            console.log(`${stepsAim - (stepsTotal + homeSteps)} more steps to reach goal.`);
        }
        
    }

}

steps(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);
