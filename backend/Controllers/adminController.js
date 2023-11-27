const employee= require('../Models/employee')


const adminLogin= async(req,res)=>{
    try {
        console.log('is reach here');
        const {name,email} = req.body
        const data= await employee.findOne({email:email,name:name})
        console.log(data);
        if(data){

            if(data.isverified){
              console.log(email);

                res.status(200).send({
                    message: "login success",
                  });
            }else{
                res.status(400).send({
                    message: "your not admon..!",
                  });
            }
        }else{
            res.status(400).send({
                message: "your name or email is incorrect",
              });
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    adminLogin
}