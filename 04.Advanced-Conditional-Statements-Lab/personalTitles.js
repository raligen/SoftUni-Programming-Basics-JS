function personalTitles (arg1, arg2) {
    let age = Number(arg1);
    let sex = arg2;    

    if (sex === "f"){
        if (age >= 16) {
            console.log("Ms.");
        } else if (age < 16) {
            console.log("Miss");
        }
    } else if (sex === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else if (age < 16) {
            console.log("Master");
        }
    } else {
        console.log("unknown");
    }

}

personalTitles(15, "f");