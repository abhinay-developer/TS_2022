
function   displayAges(theAges:string,...ages:number[]){
    console.log(theAges);
    for(let age of ages){
        console.log(age);
    }

}

displayAges("Ages",10,20,40,50,89,100,87);