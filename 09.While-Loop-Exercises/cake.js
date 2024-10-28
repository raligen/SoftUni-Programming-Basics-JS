function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let piecesCount = length * width;  

    let index = 2;
    let command = input[index];
    index++;

    while(command !== "STOP"){
        let piecesTaken = Number(command);
        piecesCount -= piecesTaken; 
                        
        if(piecesCount <= 0){
            let piecesNeeded = Math.abs(piecesCount);
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            return;
        }

        command = input[index];
        index++;
               
    }

   
        console.log(`${piecesCount} pieces are left.`);
    

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);