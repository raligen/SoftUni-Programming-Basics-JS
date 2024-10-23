function skiTrip(arg1, arg2, arg3) {
    let stay = Number(arg1) - 1;
    let room = arg2;
    let review = arg3;
    let totalPrice;

    if (room === "apartment"){
        totalPrice = stay * 25;
        if (stay > 0 && stay < 10 ) {
            totalPrice = 0.70*totalPrice;
        } else if (stay >= 10 && stay <= 15 ) {
            totalPrice = 0.65*totalPrice;
        } else if (stay > 15) {
            totalPrice = 0.50*totalPrice;
        }
    } else if (room === "president apartment") {
        totalPrice = stay * 35; 
        if (stay > 0 && stay < 10 ) {
            totalPrice = 0.90*totalPrice;
        } else if (stay >= 10 && stay <= 15 ) {
            totalPrice = 0.85*totalPrice;
        } else if (stay > 15) {
            totalPrice = 0.80*totalPrice;
        }
    } else if (room === "room for one person") {
        totalPrice = stay * 18;
    }

    if (review === "positive") {
        totalPrice = totalPrice + 0.25*totalPrice;
    } else if (review === "negative") {
        totalPrice = totalPrice - 0.10*totalPrice;
    }

    console.log(totalPrice.toFixed(2))
}

skiTrip(30, "president apartment", "negative")

