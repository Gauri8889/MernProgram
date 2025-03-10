const stuModel = require("../models/studentModel");
const StuModel = require("../models/studentModel");
const dataSave=(req, res)=>{
    const {rollno, name, city, fees}= req.body;

    // console.log("resive",req.body)
    const student=StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("Data successfully save!!");
  
}

const dataShow =async (req, res)=>{

  const studata = await StuModel.find(req.body);
  res.json(studata);
}

const searchData = async(req, res)=>{
  const { rno }=req.query;
  const Data= await StuModel.find();
  res.send(Data);
}
const dataDelete=async(req, res)=>{
  const { rno } = req.query;
  const Data = await StuModel.findOneAndDelete({rollno:rno});
  res.send("Data deleted");
}


const dataUpdate = async(req, res)=>{
  const { rno }=req.query;
  const {rollno, name, city, fees}=req.body;
  const Data= await StuModel.findOneAndUpdate({rollno:rno},{
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
  });
 // res.send("Data succesfully Updated!!!");
 res.send(Data);
}





module.exports={
  dataSave,
  dataShow,
  searchData,
  dataDelete,
  dataUpdate
}