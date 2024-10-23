function smartLilly(age, priceWm, toyPrice) {
   
    let savedMoney = 0;
    let moneyGifted = 10;
    
    for ( let birthday = 1; birthday <= age; birthday++){
        if (birthday % 2 !== 0){
           savedMoney += toyPrice;
        } else {
           savedMoney += moneyGifted - 1;
           moneyGifted += 10; 
        }
    }

    if (savedMoney >= priceWm){
        console.log(`Yes! ${(savedMoney - priceWm).toFixed(2)}`);
    } else if (priceWm > savedMoney){
        console.log(`No! ${(priceWm - savedMoney).toFixed(2)}`);
    }

}

smartLilly(21,
    1570.98,
    3);