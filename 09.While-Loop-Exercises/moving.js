function moving(input) {
    let freeSpaceWidth = Number(input[0]);

    let freeSpaceLength = Number(input[1]);

    let freeSpaceHeight = Number(input[2]);

    let volume = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;
    
    let index = 3;
    let command = input[index];
    index++;

    while(command !== "Done"){
        
        let boxesCount = Number(command); 
        volume -= boxesCount;

        if(volume <= 0){
            let volumeNeeded = Math.abs(volume);
            console.log(`No more free space! You need ${volumeNeeded} Cubic meters more.`);
            return;
        }

        command = input[index];
        index++;

    }

    console.log(`${volume} Cubic meters left.`);

    
}

moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"]);
