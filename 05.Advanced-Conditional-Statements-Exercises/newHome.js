function newHome(arg1, arg2, arg3) {
    let type = arg1;
    let quantity = Number(arg2);
    let budget = Number(arg3);
    let totalPrice = 0;
    
    switch(type) {
        case "Roses": totalPrice = 5 * quantity; 
            if (quantity >= 80){
                totalPrice = 0.90 * totalPrice;
            }
        break;
        case "Dahlias": totalPrice = 3.80 * quantity; 
            if (quantity >= 90){
                totalPrice *= 0.85;
            }
        break;
        case "Tulips": totalPrice = 2.80 * quantity; 
            if (quantity >= 80){
                totalPrice *= 0.85;
            }
        break;
        case "Narcissus": totalPrice = 3 * quantity; 
            if (quantity >= 10 && quantity < 120){
                totalPrice *= 1.15;
            }
        break;
        case "Gladiolus": totalPrice = 2.50 * quantity; 
            if (quantity >= 10 && quantity < 80){
                totalPrice *= 1.20;
            }
        break;
    } 
    
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else if (budget < totalPrice) {
         console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }

}

newHome("Roses", 55, 250);