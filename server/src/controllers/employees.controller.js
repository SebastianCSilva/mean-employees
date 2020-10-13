
const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployees = (req, res) => {
    console.log(req.body)
    res.send('create employees')
}
employeeCtrl.getEmployee = (req, res) => {}
employeeCtrl.editEmployee = (req, res) => {} 
employeeCtrl.deleteEmployee = (req, res) => {} 


module.exports = employeeCtrl