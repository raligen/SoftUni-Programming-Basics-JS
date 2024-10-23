function hotelRoom(arg1, arg2) { // 2,02
    let month = arg1;
    let nights = Number(arg2);
    let studio = 0;
    let apartment = 0;
    let studioTotal = studio * nights;
    let apartmentTotal = apartment * nights;
    
    switch(month) {
        case "May":
        case "October":
        studio = 50;
        apartment = 65;
        if (nights > 7 && nights <= 14) {
            studioTotal *= 0.95;  
        } else if (nights > 14) {
            studioTotal *= 0.70;  
            apartmentTotal *= 0.90;
        }
        break;
        case "June":
        case "September":
        studio = 75.20;
        apartment = 68.70;
        if (nights <= 14) {
            studioTotal = studio * nights;
            apartmentTotal = apartment * nights;  
        } else if (nights > 14) {
            studioTotal *= 0.80;
            apartmentTotal *= 0.90;  
        }
        break;
        case "July":
        case "August":
        studio = 76;
        apartment = 77;
        if (nights <= 14) {
            studioTotal = studio * nights;
            apartmentTotal = apartment * nights;  
        } else if (nights > 14) {
            apartmentTotal = 0.90 * apartment * nights;
            studioTotal = studio * nights;  
        }
        break;
    }
    
    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);    
}

hotelRoom("June", 1);