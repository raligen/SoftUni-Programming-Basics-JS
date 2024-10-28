function familyHoliday(budget, nights, price, extraCost) {
    
    extraCost = (extraCost*budget)/100
    
    if(nights > 7){
        price = 0.95*price;
    }

    let totalCost = nights * price + extraCost;

    if (budget >= totalCost){
        console.log(`Ivanovi will be left with ${(budget - totalCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)} leva needed.`);

    }

}

familyHoliday(800.50,
    8,
    100,
    2);