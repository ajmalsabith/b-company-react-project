const employee= require('../Models/employee')

const registerEmployee= async(req,res)=>{
    try {
       const email= req.body.email
       const password= req.body.password
       const companyData= await company.find()
       if(companyData){
         if(companyData.email==companyemail&& companyData.password==password){
            res.send({
                message:'success'
            })
         }else{
            res.status(400).send({
                message:'your passsword or email is incorrect'
            })
         }
       }else{
        res.status(400).send({
            message:'somthing wrong..!'
        })
       }
    } catch (err) {
        console.log(err.error.message);
    }
}