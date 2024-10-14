function bonusPoints(score) {
    let bonus = 0.0;

    if (score <= 100 ) {
		bonus = 5;
	} else if (score > 100 && score <= 1000) {
        bonus = 0.2*score;
	} else if (score > 1000 ) {
		bonus = 0.1*score;
	} 
	
	if (score % 2 === 0) {
		bonus = bonus + 1;
	} else if (score % 5 === 0 && score % 10 !== 0) {
	    bonus = bonus + 2;
    }

    console.log(bonus);
	console.log(score + bonus);
}

bonusPoints(2703);
	
	