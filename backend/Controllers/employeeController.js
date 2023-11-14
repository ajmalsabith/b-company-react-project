const { verify } = require('crypto');
const employee= require('../Models/employee')

const textflow = require("textflow.js");
textflow.useKey("ZpxCcuvI1YD8FLmsP2Zhpr75BRMLi6ZQ0P29IZ9l88XDjupMxv1Jomcx2xP4yKMu");


var otpog

const verificationSend= async(phone)=>{


    try {

        const phonenumber=phone
        const verificationOptions={
            service_name:'Guest',
            seconds:600
        }

      const result=await  textflow.sendVerificationSMS('+91'+phonenumber,verificationOptions);

      if(result){
        console.log(result);
        console.log('otp send success');
        otpog=result.data.verification_code
      }else{
        console.log('sending wrong...!');
      }

        
    } catch (error) {
        console.log(error.message);
    }

}
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
       
       const newemployee=new employee({
        email:email,
        name:name,
        dob:dob,
        desigination:desigination,
        phone:phone,
        place:place,
        about:about
       })

       const response=await newemployee.save()
       if(response){
        verificationSend(phone)
        res.status(200).send({
            message: "register success",
            otp:'otp send to your phone'
        });
       }else{
        res.status(400).send({
            message: "somthing wrong..!",
        });
       }
      
    } catch (err) {
        console.log(err.message);
    }
}


const verifyotp=async(req,res)=>{

    try {
         const otp= req.body.otpnum
         console.log(otpog+'==ogotp');
         console.log(otp+'==userotp');
         if(otp===otpog){
            req.status(400).send({
                message:'verification success..'
            })
         }else{
            res.status(400).send({
                message: "otp is incorrect...!",
            });
         }
    } catch (error) {
        console.log(error.message);
    }
}


module.exports={
    registerEmployee,
    verifyotp
}