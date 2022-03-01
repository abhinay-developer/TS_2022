 class   Person{

     firstName:string;
     lastName:string;
     email:string;
     mobileNumber:number;
     
     constructor(firstName:string,lastName:string,email:string,mobileNumber:number){
         this.firstName=firstName;
         this.lastName=lastName;
         this.email=email;
         this.mobileNumber=mobileNumber;
     }
     
     displayPersonDetails(){
         console.log(`\n FirstName: ${this.firstName} \nLast Name :${this.lastName} \nEmail ${this.email} \n Mobile Number ${this.mobileNumber}`   )
     }
 } 

 class  Employee extends Person{
    
       employeeId:number;
       desgination:string;
       department:string;
       location:string;
          
       constructor(firstName:string,lastName:string,email:string,mobileNumber:number,employeeId:number,desgination:string,department:string,location:string){
           super(firstName,lastName,email,mobileNumber);
           this.employeeId=employeeId;
           this.desgination=desgination;
           this.department=department;
           this.location=location;
       }
        
          
      diplayEmployeeDetails(){
        console.log(`\n EmployeeId: ${this.employeeId} \nDesgination :${this.desgination} \Department ${this.department} \n Location ${this.location} First Name:${this.firstName} Last Name :${this.lastName} Email :${this.email} Mobile Number :${this.mobileNumber}`   ) 
      }  
 }

  let emp=new Employee("Raja","Kumar","raaj@gmail.com",9900099990,1,"Angular Dev","IT","Hyd");
   emp.diplayEmployeeDetails();