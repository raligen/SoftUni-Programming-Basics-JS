function password(input) {
    let username = input[0];
    let password = input[1];
    
    let index = 2;
    let value = input[index];

    while(value!==password){
        index++;
        value = input[index];
    }
    
    if (value===password){
        console.log(`Welcome ${username}!`);
    }
}

password(["Gosho",
    "secret",
    "secret"]);