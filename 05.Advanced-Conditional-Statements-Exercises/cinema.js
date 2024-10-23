function cinema(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    let fullCapacity = rows * columns;

    switch(type){
        case "Premiere": console.log((fullCapacity * 12).toFixed(2)); break;
        case "Normal": console.log((fullCapacity * 7.5).toFixed(2)); break;
        case "Discount": console.log((fullCapacity * 5).toFixed(2)); break;
    }
    
}

cinema("Premiere", 10, 12)