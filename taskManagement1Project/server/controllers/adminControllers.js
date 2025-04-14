const AdminModel = require("../models/adminModel");



const adminLogin=async(req, res)=>{
    const { adminid, password }=req.body;
    try {
        const Admin= await AdminModel.findOne({id:adminid});

        if(!Admin)
        {
            res.status(400).send({msg:"Invalid Admin ID"})
        }
        if(Admin.password!=password)
        {
            res.status(400).send({msg:"Invalid Password"})
        }
      
      res.status(200).send({admin:Admin,msg:"you are succesfully Login!"})
    } catch (error) {
        console.log(error)
        
    }
    
}
module.exports={
    adminLogin
}