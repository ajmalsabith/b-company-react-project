const employee= require('../Models/employee')

const registerEmployee= async(req,res)=>{
    try {
       const email= req.body.email
       const name= req.body.name
       const dob= req.body.dob
       const desigination= req.body.desigination
       const phone= req.body.phone
       const about= req.body.about
       const place= req.body.place
       console.log(desigination+'=='+dob);
       const employeData= await employee.find()
      
    } catch (err) {
        console.log(err.error.message);
    }
}


module.exports={
    registerEmployee
}