const expres=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')

const app=expres()
app.use(expres.json())
app.use(cors())

mongoose.connect("mongodb+srv://kdprojects847:<password>@cluster1.7jyzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("no record is existed")
        }
    })
})

app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is runing")
})