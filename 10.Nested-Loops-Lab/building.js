function building(a, b) {
    let floorCount = Number(a);
    let roomsPerFloor = Number(b);
  
    for (let i = floorCount; i > 0; i--){
        let buff = "";
        for (let j = 0; j < roomsPerFloor; j++){
            if (i === floorCount){
                buff += `L${i}${j} `;
            } else if (i % 2 === 0){
                buff += `O${i}${j} `;
            } else if (i % 2 !== 0){
                buff += `A${i}${j} `;
            }
        }
        console.log(buff);
    }
    
}

building(6, 4);