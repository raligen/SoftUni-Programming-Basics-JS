function oscars(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    
    let juryNameLength = 0;
    let individualJuryPoints = 0;
    let totalIndividualJuryPoints = 0;

    let totalJuryPoints = 0;
   
    for (let i = 3; i <= 2 + juryCount*2; i = i + 1){
      
        if(i % 2 !== 0) {
           juryNameLength = input[i].length;       
        } else {
           individualJuryPoints = Number(input[i]);
           totalIndividualJuryPoints = juryNameLength * individualJuryPoints /2;
           totalJuryPoints += totalIndividualJuryPoints;
        } 
        
        if(totalJuryPoints>=(1250.5-academyPoints)){
            break;
        }
    } 

    let total = academyPoints + totalJuryPoints;

    if (total > 1250.5){
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${total.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - total).toFixed(1)} more!`);
    }

}
     
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);