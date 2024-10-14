function lunchBreak(series, duration, breakDuration) {

    let eat = 0.125*breakDuration;
    let relax = 0.25*breakDuration;

    let timeAvailable = breakDuration - eat - relax;

    if (timeAvailable >= duration){
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeAvailable - duration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(duration - timeAvailable)} more minutes.`)
    }
}

lunchBreak("Game of Thrones", 48, 60)