function readingWords(input) {
    let index = 0;
    let value = input[index];

    while(value!=="Stop"){
        console.log(value);
        index++;
        value = input[index];
    }
    
}

readingWords(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);