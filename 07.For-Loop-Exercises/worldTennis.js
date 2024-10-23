function worldTennis(input) {
    let tourCount = Number(input[0]);
    let points = Number(input[1]);
    let extraPoints = 0;
    let toursWon = 0;

    for (let i = 2; i < tourCount + 2; i++){
        let currentTour = input[i];

        if (currentTour === "W") {
            extraPoints += 2000; 
            toursWon += 1;                
        } else if (currentTour === "F") {
            extraPoints += 1200;                
        } else if (currentTour === "SF") {
            extraPoints += 720;                
        } 
        
    }

    let avgPoints = extraPoints/tourCount;
    let winPercent = (toursWon/tourCount) * 100;

    console.log(`Final points: ${points + extraPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);

}

worldTennis(["5",
    "1400",
    "F",
"SF",
"W",
"W",
"SF"]);