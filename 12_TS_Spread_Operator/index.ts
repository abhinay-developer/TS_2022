//  ...VarName


let colors:string[]=["RED","GREEN","BLUE","VIOLET"];

let bikes:string[]=["CBZ","HONDA","FZ","PULSAR"];

let colorsAndBikes=[...colors,...bikes];

//console.log(colorsAndBikes);
//traditional for

  for(let i=0;i<colorsAndBikes.length;i++){
     // console.log(colorsAndBikes[i]);
  }

  colorsAndBikes.forEach((colorAndBike)=>{
     // console.log(colorAndBike);
  })

  for(let colorAndBike of colorsAndBikes){
      //console.log(colorAndBike);
  }

  for(let colorAndBike in colorsAndBikes){
      console.log(colorsAndBikes[colorAndBike]);
  }