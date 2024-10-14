function shopping(budget, videoCards, processors, rams) {

    let costVideoCards = videoCards * 250;
    let costProcessors = 0.35*costVideoCards*processors;
    let costRams = 0.1*costVideoCards*rams;
    
    let totalCost = costVideoCards + costProcessors + costRams;

    if (videoCards > processors) {
        totalCost = totalCost - 0.15*totalCost;
    }
    
    if (totalCost <= budget){
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`)
    }
    
}

shopping(900, 2, 1, 3)