var Employee = /** @class */ (function () {
    function Employee(empId, name, desgination, salary) {
        this.empId = empId;
        this.name = name;
        this.desgination = desgination;
        this.salary = salary;
    }
    Employee.prototype.displayEmployeeDetails = function () {
        console.log("\nEmp Id:" + this.empId + " \nName: " + this.name + " \nDesgination :" + this.desgination + " \nSalary :" + this.salary);
    };
    return Employee;
}());
var employee = new Employee(1, 'Naresh', 'Angular Developer', 100000);
employee.displayEmployeeDetails();
