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
       
       const newemployee=new employee({
        email:email,
        name:name,
        dob:dob,
        desigination:desigination,
        phone:phone,
        place:place,
        apout:about
       })

       const res=await newemployee.save()
       if(res){
        res.status(200).send({
            message: "register success",
        });
       }else{
        res.status(400).send({
            message: "somthing wrong..!",
        });
       }
      
    } catch (err) {
        console.log(err.error.message);
    }
}


module.exports={
    registerEmployee
}