function cinemaTickets(input) {
    let totalStandardSold = 0;
    let totalStudentSold = 0;
    let totalKidSold = 0;
    
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Finish"){
        let movieTitle = command;
       
        let freeSeats = Number(input[index]);
        index++;

        let totalTicketsSold = 0;

        let command1 = input[index];
        index++;

        while(command1 !== "End"){
            let ticketTypeSold = command1;

            if (ticketTypeSold === "standard"){
                totalStandardSold++; 
            } else if (ticketTypeSold === "student"){
                totalStudentSold++; 
            } else if (ticketTypeSold === "kid"){
                totalKidSold++; 
            } 
            
            totalTicketsSold++;
            
            if(totalTicketsSold === freeSeats){
                break; 
            }
            
            command1 = input[index];
            index++;
        }

        let totalSeatTakenPercent = (totalTicketsSold/freeSeats)*100;

        console.log(`${movieTitle} - ${totalSeatTakenPercent.toFixed(2)}% full.`);
        
        command = input[index];
        index++;
    }

    let total = totalKidSold + totalStandardSold + totalStudentSold;
    let studentPerc = (totalStudentSold/total)*100
    let standPerc = (totalStandardSold/total)*100
    let kidPerc = (totalKidSold/total)*100

    console.log(`Total tickets: ${total}`);
    console.log(`${studentPerc.toFixed(2)}% student tickets.`);
    console.log(`${standPerc.toFixed(2)}% standard tickets.`);
    console.log(`${kidPerc.toFixed(2)}% kids tickets.`);

    
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);