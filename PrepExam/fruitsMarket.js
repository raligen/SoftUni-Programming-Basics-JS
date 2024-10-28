function fruitsMarket(strawbPrice, bananasKg, orangesKg, raspbKg, strawbKg){

    let raspbPrice = strawbPrice / 2;
    let orangesPrice = 0.60*raspbPrice;
    let bananasPrice = 0.20*raspbPrice;

    let moneyNeeded = (strawbPrice * strawbKg) + (raspbPrice * raspbKg) + orangesPrice * orangesKg + bananasKg * bananasPrice;

    console.log(moneyNeeded.toFixed(2));
    
}

fruitsMarket(48,
    10,
    3.3,
    6.5,
    1.7);