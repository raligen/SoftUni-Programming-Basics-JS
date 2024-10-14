function toyStore(price, puzzles, talkingDolls, teddyBears, minions, lorries) {
    let puzzlesRevenue = puzzles * 2.6;
    let talkingDollsRevenue = talkingDolls * 3;
    let teddyBearsRevenue = teddyBears * 4.1;
    let minionsRevenue = minions * 8.2;
    let lorriesRevenue = lorries * 2;
    let toysRevenue = puzzlesRevenue + talkingDollsRevenue + teddyBearsRevenue + minionsRevenue + lorriesRevenue;

    if (puzzles + talkingDolls + teddyBears + minions + lorries >= 50){
        toysRevenue = toysRevenue - (0.25*toysRevenue);
    }
    
    let moneyAvailable = toysRevenue - 0.1*toysRevenue;

    if (moneyAvailable >= price) {
        console.log(`Yes! ${(moneyAvailable - price).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(price - moneyAvailable).toFixed(2)} lv needed.`)
    }
}

toyStore(200, 6, 6, 6, 6, 6)