const mongoose=require('mongoose')

const employeeShema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const EmployeeModel=mongoose.model("employees",employeeShema)

module.exports=EmployeeModel

