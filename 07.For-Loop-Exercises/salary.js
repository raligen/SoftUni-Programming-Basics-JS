function salary(input) {
    let n = input[0];
    let wage = input[1];
     
    for (let  i = 2; i < n + 2; i++){
        let currentTab = input[i];

        switch(currentTab){
        case "Facebook": wage -= 150; break;
        case "Instagram": wage -= 100; break;
        case "Reddit": wage -= 50; break;
        }
        if (wage <= 0){
            console.log(`You have lost your salary.`);
            return;
        }
    }
    
    console.log(`${wage}`);

}

salary([3,
    500,
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);