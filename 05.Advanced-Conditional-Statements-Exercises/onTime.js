function onTime(arg1, arg2, arg3, arg4) {
    let examHour = parseInt(arg1);
    let examMinute = parseInt(arg2);
    let arrivalHour = parseInt(arg3);
    let arrivalMinute = parseInt(arg4);

    let examTimeMin = examHour * 60 + examMinute;
    
    let arrivalTimeMin = arrivalHour * 60 + arrivalMinute;

    if (arrivalTimeMin - examTimeMin > 0 && arrivalTimeMin - examTimeMin < 60) {
        console.log("Late");
        console.log(`${arrivalTimeMin - examTimeMin} minutes after the start`)
    } else if (arrivalTimeMin - examTimeMin >= 70) {
        console.log("Late");
        console.log(`${Math.trunc((arrivalTimeMin - examTimeMin)/60)}:${(arrivalTimeMin - examTimeMin)%60} hours after the start`)
    } else if (arrivalTimeMin - examTimeMin >= 60 && arrivalTimeMin - examTimeMin < 70) {
        console.log("Late");
        console.log(`${Math.trunc((arrivalTimeMin - examTimeMin)/60)}:0${(arrivalTimeMin - examTimeMin)%60} hours after the start`)
    } else if (arrivalTimeMin - examTimeMin === 0 && examTimeMin - arrivalTimeMin <= 30){
        console.log("On time");
        console.log(`${examTimeMin - arrivalTimeMin} minutes before the start`)
    } else if (examTimeMin - arrivalTimeMin > 30 && examTimeMin - arrivalTimeMin < 60){
        console.log("Early");
        console.log(`${examTimeMin - arrivalTimeMin} minutes before the start`)
    } else if (examTimeMin - arrivalTimeMin >= 60 && examTimeMin - arrivalTimeMin < 70){
        console.log("Early");
        console.log(`${Math.trunc((examTimeMin - arrivalTimeMin)/60)}:0${(examTimeMin - arrivalTimeMin)%60} hours before the start`)
    } else if (examTimeMin - arrivalTimeMin >= 70) {
        console.log("Early");
        console.log(`${Math.trunc((examTimeMin - arrivalTimeMin)/60)}:${(examTimeMin - arrivalTimeMin)%60} hours before the start`)
    }

}

onTime(14, 00, 13, 55);