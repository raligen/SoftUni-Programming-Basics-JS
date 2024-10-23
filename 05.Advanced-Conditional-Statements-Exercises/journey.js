function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let spend;
    let location;
    let accommodation;
    
    if (budget <= 100){
        location = "Bulgaria";
        if (season === "summer"){
            spend = 0.30*budget;
            accommodation = "Camp";
        } else if (season === "winter") {
            spend = 0.70*budget;
            accommodation = "Hotel";
        }
    } else if (100 <= budget && budget <= 1000) {
        location = "Balkans";
        switch (season) {
            case "summer": spend = 0.40*budget; accommodation = "Camp";break;
            case "winter": spend = 0.80*budget; accommodation = "Hotel";break;
        }
    } else if (budget > 1000) {
        location = "Europe";
        spend = 0.90*budget;
        accommodation = "Hotel";
    }

    console.log(`Somewhere in ${location}`);
    console.log(`${accommodation} - ${spend.toFixed(2)}`);
}

journey(1500, "summer");