function test(input) {
    let index = 0 ;
    let largest = input[index];

    for (let i = 0; i<input.length; i++){
        if (input[i] > largest){
            largest = input[i];
        }
    }
    console.log(largest);
}
    


test([3, 6, 2, 56, 32, 5, 89, 32])