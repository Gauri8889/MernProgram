
const EmpModel= require("../models/empModels");
const dataSave = async(req,res)=>{
    const {empno, name, designation, salary}=req.body;
    const Employee = await EmpModel.create({
        empno:empno,
        name:name,
        designation:designation,
        salary:salary
    })
    //res.send("data save!!");
    res.send(Employee);
    console.log(Employee);
}
const dataDisplay= async(req, res)=>{
    const Data= await EmpModel.find();
    res.send(Data);
}
const dataSearch=async(req, res)=>{
    const {eno}=req.query;
    const employee = await EmpModel.find({empno:eno});
    res.send(employee);
}

module.exports={
    dataSave,
    dataDisplay,
    dataSearch
}