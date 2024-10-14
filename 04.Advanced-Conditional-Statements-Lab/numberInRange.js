function numberInRange(entry) {
    let integer = Number(entry);
    if (integer >= (-100) && integer <= 100 & integer !== 0) {
        console.log("Yes");
    } else { 
        console.log("No");
    }
    
}

numberInRange(-80);