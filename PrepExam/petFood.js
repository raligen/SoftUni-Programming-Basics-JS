function petFood(input) {
   let days = input[0];
   let totalFood = input[1];
   
   let dogFood1stDay = input[2];
   let catFood1stDay = input[3];

   let dogFood2ndDay = input[4];
   let catFood2ndDay = input[5];

   let dogFood3rdDay = input[6];
   let catFood3rdDay = input[7];

   let totalBiscuits = (dogFood3rdDay + catFood3rdDay)*0.10;
   let totalEaten =  dogFood1stDay + catFood1stDay + dogFood2ndDay + catFood2ndDay + dogFood3rdDay + catFood3rdDay;
   let percentEaten = (totalEaten/totalFood)*100;
   let catEaten = catFood1stDay + catFood2ndDay + catFood3rdDay;
   let dogEaten = dogFood1stDay + dogFood2ndDay + dogFood3rdDay;
    let percentDog = (dogEaten/totalEaten)*100;
    let percentCat = (catEaten/totalEaten)*100;

    console.log(`Total eaten biscuits: ${totalBiscuits}gr.`);
    console.log(`${percentEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);

}

petFood([3,
1000,
300,
20,
100,
30,
110,
40]);