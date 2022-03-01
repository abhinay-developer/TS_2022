var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
    Person.prototype.displayPersonDetails = function () {
        console.log("\n FirstName: " + this.firstName + " \nLast Name :" + this.lastName + " \nEmail " + this.email + " \n Mobile Number " + this.mobileNumber);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, email, mobileNumber, employeeId, desgination, department, location) {
        var _this = _super.call(this, firstName, lastName, email, mobileNumber) || this;
        _this.employeeId = employeeId;
        _this.desgination = desgination;
        _this.department = department;
        _this.location = location;
        return _this;
    }
    Employee.prototype.diplayEmployeeDetails = function () {
        console.log("\n EmployeeId: " + this.employeeId + " \nDesgination :" + this.desgination + " Department " + this.department + " \n Location " + this.location + " First Name:" + this.firstName + " Last Name :" + this.lastName + " Email :" + this.email + " Mobile Number :" + this.mobileNumber);
    };
    return Employee;
}(Person));
var emp = new Employee("Raja", "Kumar", "raaj@gmail.com", 9900099990, 1, "Angular Dev", "IT", "Hyd");
emp.diplayEmployeeDetails();
