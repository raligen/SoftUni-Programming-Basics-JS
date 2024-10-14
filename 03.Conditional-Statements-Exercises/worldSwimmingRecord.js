function worldSwimmingRecord(recordSeconds, distance, timeOneMeter) {

    let delay = Math.floor(distance / 15) * 12.5;
    let ivansTime = timeOneMeter * distance + delay;

    if (recordSeconds > ivansTime){
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`)
    } else if (recordSeconds <= ivansTime){
        console.log(`No, he failed! He was ${(ivansTime - recordSeconds).toFixed(2)} seconds slower.`)
    }
    
}

worldSwimmingRecord(55555.67, 3017, 5.03)