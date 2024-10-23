function fishingBoat(arg1, arg2, arg3){
    let budget = Number(arg1);
    let season = arg2;
    let fishermen = Number(arg3);
    let totalPrice = 0;

    switch(season) {
        case "Spring": totalPrice = 3000;
        break;
        case "Summer": 
        case "Autumn": totalPrice = 4200;
        break;
        case "Winter": totalPrice = 2000;
        break;
    } 
    
    
    if (fishermen <= 6){
        totalPrice *= 0.90;
    } else if (fishermen <= 11){
        totalPrice *= 0.85;
    } else if (fishermen >= 12){
        totalPrice *= 0.75;
    } 
    
    if (fishermen % 2 === 0 && season !== "Autumn"){
        totalPrice *= 0.95;
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }

}

fishingBoat(3000, "Summer", 11);
