function examPreparation(input) {
    let maxBadGradeCount = Number(input[0]);
   
    let badGradeCount = 0;
    let gradesCount = 0;
    let sumGrades = 0;
    let lastProblem = '';

    let index = 1;
    let currentItem = input[index];
    index++;

    while(currentItem !== "Enough"){
        lastProblem = currentItem;  
        currentItem = Number(input[index]);
        index ++;

        if(currentItem <=4 ){
            badGradeCount++;
            if (badGradeCount === maxBadGradeCount){
                console.log(`You need a break, ${badGradeCount} poor grades.`);
                return;
            } 
        }   
        
        gradesCount++;
        sumGrades += currentItem; 
        
        currentItem = input[index];      
        index ++;
        
    }

    console.log(`Average score: ${(sumGrades/gradesCount).toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`);

}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);

