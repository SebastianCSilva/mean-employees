
const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployees = async (req, res) => {
    const newEmployee = new Employee(req.body);
    
    await newEmployee.save();

    res.send({message: "Employee Created"});
};
employeeCtrl.getEmployee = async (req, res) => {
    //console.log(req.params)
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};
employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'employee updated'})
}; 

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.join({status: 'Employee Deleted'})
}; 


module.exports = employeeCtrl