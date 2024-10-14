function godzillaVsKong(budget, extras, priceClothing){

    let decor = 0.1*budget;
    let clothingCost = extras * priceClothing;

    if (extras > 150){
        clothingCost = clothingCost - 0.1*clothingCost;
    }

    let totalCost = clothingCost + decor;
    if (totalCost > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`)  
    }

}

godzillaVsKong(15437.62, 186, 57.99)


   

   