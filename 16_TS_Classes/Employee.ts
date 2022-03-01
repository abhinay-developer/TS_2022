class Employee{

    empId:number;
    name:string;
    desgination:string;
    salary:number;

     constructor(empId:number,name:string,desgination:string,salary:number){
         this.empId=empId;
         this.name=name;
         this.desgination=desgination;
         this.salary=salary;
     }

      displayEmployeeDetails(){
        console.log(`\nEmp Id:${this.empId} \nName: ${this.name} \nDesgination :${this.desgination} \nSalary :${this.salary}`)
      }
}

let employee=new Employee(1,'Naresh','Angular Developer',100000);
employee.displayEmployeeDetails();

