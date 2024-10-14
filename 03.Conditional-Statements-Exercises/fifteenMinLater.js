function fifteenMinLater(hour, minutes) {

	let totalMin = hour * 60 + parseInt(minutes) + 15;
	let newHour = Math.floor(totalMin / 60);
	let newMin = totalMin % 60;

	if (newHour >= 24) {
		newHour = newHour - 24;
	}
	if (newMin < 10) {
		console.log(`${newHour}:0${newMin}`);
	} else {
		console.log(`${newHour}:${newMin}`);
	}

}

fifteenMinLater(12, 49);
	
