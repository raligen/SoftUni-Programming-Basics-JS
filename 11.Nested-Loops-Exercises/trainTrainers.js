function trainTrainers(input) {
    let gradesPerPresentation = Number(input[0]);

    let gradesSum = 0;
    let numberPresentations = 0;

    let index = 1;
    let command = input[index];
    index++;

    while(command !== "Finish"){
        let gradesSumPerPresentation = 0;
        let presentationTitle = command;
        
        for (let currentGrade=1; currentGrade <= gradesPerPresentation; currentGrade++){ // мини-цикъл, итериращ през всички дадени оценки, чиято крайна стойност е равна на броя дадени оценки
            let grade = Number(input[index]);                                            // в тялото му извършваме операциите, които са нужни за намиране на общата сума на оцинките на конкретната презентация
            index++;
            gradesSumPerPresentation += grade;
        } 
        
        let avgPresentationGrade = gradesSumPerPresentation / gradesPerPresentation;
        console.log(`${presentationTitle} - ${avgPresentationGrade.toFixed(2)}.`);
                 
        numberPresentations++;
        gradesSum += avgPresentationGrade;
                       
        command = input[index];
        index++;
    }

    console.log(`Student's final assessment is ${(gradesSum/numberPresentations).toFixed(2)}.`);
    
}

trainTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"]);