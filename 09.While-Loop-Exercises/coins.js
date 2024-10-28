function coins(arg) {
   let change = arg;
   let changeinStotinki = Math.round(change * 100);
   let coinsUsed = 0;

   while(changeinStotinki !== 0){
        if (changeinStotinki >= 200){
            changeinStotinki -= 200;
        } else if (changeinStotinki >=100){
            changeinStotinki -=100;
        } else if (changeinStotinki >=50){
            changeinStotinki -=50;
        } else if (changeinStotinki >=20){
            changeinStotinki -=20;
        } else if (changeinStotinki >=10){
            changeinStotinki -=10;
        } else if (changeinStotinki >=5){
            changeinStotinki -=5;
        } else if (changeinStotinki >=2){
            changeinStotinki -=2;
        } else if (changeinStotinki >=1){
            changeinStotinki -=1;
        } 
        coinsUsed++;
   }    

   console.log(coinsUsed);

}

//coins(1.23);

 coins(2);
// coins(0.56);
// coins(2.73);