function sumSeconds(athlete1, athlete2, athlete3){
    let totalTime = athlete1 + athlete2 + athlete3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

