function summerOutfit(arg1, arg2) {
    let temp = Number(arg1);
    let dayInterval = arg2;   
    let outfit;
    let shoes;

    if ( 10 <= temp && temp <= 18){
        if (dayInterval === "Morning") {
            outfit = "Sweatshirt"; 
            shoes = "Sneakers";
        } else if (dayInterval === "Afternoon" || dayInterval === "Evening") {
            outfit = "Shirt"; 
            shoes = "Moccasins";
        }
    } else if ( 18 < temp && temp <= 24) {
        if (dayInterval === "Morning" || dayInterval === "Evening") {
            outfit = "Shirt"; 
            shoes = "Moccasins";
        } else if (dayInterval === "Afternoon") {
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        } 
    } else if (temp >= 25) {
        if (dayInterval === "Morning") {
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        } else if (dayInterval === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayInterval === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
   
}

summerOutfit(22, "Afternoon");