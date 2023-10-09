import { Employee, cadre, tax, benefits, bonus, reimbursement } from './employee.js';

// Modify the getEmployeeInformation() function to use the imported variables
function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre.getCadre());
  console.log('Tax: ' + tax.calculateTax());
  console.log('Benefits: ' + benefits.getBenefits());
  console.log('Bonus: ' + bonus.calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursement.reimbursementEligibility() + '\n');
}

// Call the function with different salary values
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
