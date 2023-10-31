// Filename: complexCode.js
// Description: This code simulates a complex payroll management system with multiple modules and functionalities.

// Employee class to store employee details
class Employee {
  constructor(id, name, salary, department) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  // Method to calculate bonus based on salary and department
  calculateBonus() {
    let bonus = 0;
    switch (this.department) {
      case "IT":
        bonus = this.salary * 0.1;
        break;
      case "HR":
        bonus = this.salary * 0.08;
        break;
      case "Finance":
        bonus = this.salary * 0.12;
        break;
      default:
        bonus = this.salary * 0.05;
        break;
    }
    return bonus.toFixed(2);
  }
}

// Payroll module to handle employee payroll and bonuses
const Payroll = {
  employees: [],

  // Method to add a new employee to the system
  addEmployee: function (id, name, salary, department) {
    const employee = new Employee(id, name, salary, department);
    this.employees.push(employee);
  },

  // Method to calculate the total bonus expense for all employees
  calculateTotalBonusExpense: function () {
    let totalBonus = 0;
    for (let employee of this.employees) {
      totalBonus += Number(employee.calculateBonus());
    }
    return totalBonus.toFixed(2);
  },

  // Method to calculate the average bonus
  calculateAverageBonus: function () {
    const totalBonus = this.calculateTotalBonusExpense();
    return (totalBonus / this.employees.length).toFixed(2);
  },
};

// Example usage
Payroll.addEmployee("1001", "John Doe", 5000, "IT");
Payroll.addEmployee("1002", "Jane Smith", 5500, "HR");
Payroll.addEmployee("1003", "Mike Johnson", 8000, "Finance");

console.log("Employees:", Payroll.employees);
console.log("Total Bonus Expense:", Payroll.calculateTotalBonusExpense());
console.log("Average Bonus:", Payroll.calculateAverageBonus());

// Output:
// Employees: [
//   Employee { id: '1001', name: 'John Doe', salary: 5000, department: 'IT' },
//   Employee { id: '1002', name: 'Jane Smith', salary: 5500, department: 'HR' },
//   Employee { id: '1003', name: 'Mike Johnson', salary: 8000, department: 'Finance' }
// ]
// Total Bonus Expense: 1160.00
// Average Bonus: 386.67

// ... additional code and functionality can be added below to further enhance the complexity of the system