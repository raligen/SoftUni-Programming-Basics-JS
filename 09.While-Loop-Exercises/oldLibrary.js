function oldLibrary(input) {
    let searchedBook = input[0];
    let checkedCount = 0;

    let index = 1;
    let currentItem = input[index];
    index++;
  
    while (currentItem !== "No More Books"){

        if (currentItem === searchedBook){
            console.log(`You checked ${checkedCount} books and found it.`);    
            return; // прекратяваме изпълнението на ЦЯЛАТА функция
        } 

        checkedCount++;
        
        currentItem = input[index];
        index ++;
    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedCount} books.`); 
   
}

oldLibrary(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
    

