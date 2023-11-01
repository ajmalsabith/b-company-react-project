const company= require('../Models/company')

const logincompany= async(req,res)=>{
    try {
       const companyemail= req.body.companyemail
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


module.exports={
    logincompany
}