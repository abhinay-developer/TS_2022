/**
 *  if 
 *  if-else
 *  if else if else
 *  Nested If
 *  Ladder If
 */

/***
 *  If Condition is satisfied when condition is true
 */

let firstNumber=10,secoundNumber=20;

if(firstNumber<secoundNumber){
    console.log("first Number is Greater than Secound Number")  //if
}

/***
 *  If -Else        if condition is statisfied  print the statement otherwise iot goes to else 
 */

let age=56;
    
 if(age<18){
         // console.log("Am Eligible for Marriage");
 }else{
     console.log("Am Not Eleigible For Marriage");
 }

 /****
  *  if-else if  else
  *           0-2             Associate Software
  *           2-3             software Engineer
  *           3-6             senior Software Engineer
  *           6-9             Tech Lead
  *           9-14            Project Manager     
  *           14-18           Senior Project Manager
  *           18-25           Architect
  *           25-60              and above  President 
  */
 let  exp:number=9;
    if(exp>=0&&exp<=2){
        console.log("Associate Software Engineer");
    }else if(exp>2&&exp<=3){
        console.log("Software Engineer");
    }else if(exp>=3&&exp<=6){
        console.log("Senior Software Engineer");
    }else if(exp>6&&exp<=9){
        console.log("Tech Lead");
    }else if(exp>9&&exp<=14){
      console.log("Project Manager")   
    }else if(exp>14&&exp<=18){
        console.log("Senior Project Manager")
    }else if(exp>18&&exp<=25){
        console.log("Architect")
    }else if(exp>25&&exp<=60){
        console.log("President");
    }else{
        console.log("Not Valid Exp");
    }


/****
 * 
 *  Nested If
 */

   let number=10;
    if(number>0){
        if(number>0&&number<=10){
            console.log("Number Lies b/w 0-10")
        }
    }

    // Ladder If

    let myAge:number=25;


    if(myAge>0&&myAge<18){
        console.log("You are Not Eligible For Voting")
    }

    if(myAge>18){
        console.log("You are Elegible For Voting");
    }
