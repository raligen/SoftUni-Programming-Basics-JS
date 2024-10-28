function filmDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let pricePerDay; 
    let totalCost = 0; 
    
    switch(destination){
        case "Dubai": 
            if(season === "Winter") {
                pricePerDay = 45000;
            } else {
                pricePerDay = 40000;
            }
            break;
        case "Sofia":  
            if(season === "Winter") {
                pricePerDay = 17000;
            } else {
                pricePerDay = 12500;
                
            }
            break;
        case "London":  
            if(season === "Winter") {
                pricePerDay = 24000;
            } else {
                pricePerDay = 20250;
            }
            break;
    }
    
    totalCost = days * pricePerDay;
    
    if (destination === "Sofia"){
        totalCost = 1.25*totalCost;
    } else if (destination === "Dubai"){
        totalCost = 0.70*totalCost;
    }
    

    if (budget >= totalCost){
        console.log(`The budget for the movie is enough! We have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(totalCost - budget).toFixed(2)} leva more!`);

    }
}

filmDestination([400000, "Sofia", "Winter", 20]);