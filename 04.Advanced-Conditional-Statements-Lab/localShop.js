function localShop(arg1, arg2, arg3) {
    let item = arg1;
    let town = arg2;
    let quantity = Number(arg3);
    let price = 0;
    
    switch(item) {
        case "coffee": 
        switch (town) {
            case "Sofia":
                price = 0.5;                
                break;
            case "Plovdiv":
                price = 0.40;
                break;
            case "Varna":
                price = 0.45;
                break;
        }
        break;
        case "water":  
        switch (town) {
            case "Sofia":
                price = 0.8;                
                break;
            case "Plovdiv":
                price = 0.70;
                break;
            case "Varna":
                price = 0.7;
                break;
        }
        break;
        case "beer":  
        switch (town) {
            case "Sofia":
                price = 1.2;                
                break;
            case "Plovdiv":
                price = 1.15;
                break;
            case "Varna":
                price = 1.1;
                break;
        }
        break;
        case "sweets":  
        switch (town) {
            case "Sofia":
               price = 1.45;                
                break;
            case "Plovdiv":
                price = 1.30;
                break;
            case "Varna":
                price = 1.35;
                break;
        }
        break;
        case "peanuts":  
        switch (town) {
            case "Sofia":
               price = 1.60;                
                break;
            case "Plovdiv":
                price = 1.50;
                break;
            case "Varna":
                price = 1.55;
                break;
        }
        break;
    }
    console.log(quantity * price);

}

localShop("coffee", "Plovdiv", 3)