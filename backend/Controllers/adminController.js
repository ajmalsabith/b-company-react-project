const employee= require('../Models/employee')
const project= require('../Models/project')


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

const getempdata=async (req,res)=>{
    try{

        console.log('is here');
        const userdata=await employee.find({})
        if(userdata){
           return res.status(200).send({
                userdata:userdata
            })
        }else{
           return res.status(400).send({
                message:'somthing wrong..'
            })
        }
    }catch(err){
        console.log(err.message);
    }
}

const actions= async(req,res)=>{
    try {
      const id=  req.body.id
        const isemp= await employee.findOne({_id:id})
        
        if (isemp) {
            if(isemp.isblock){
                await employee.updateOne({_id:id},{$set:{isblock:false}})
                return res.status(200).send({
                 message:'emp-unblocked'
                })
             }else{
                await employee.updateOne({_id:id},{$set:{isblock:true}})
                return res.status(200).send({
                    message:'emp-blocked'
               })
             }
        }else{
            return res.status(400).send({
                message:'somthing wrong..'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}

const deleteemp= async(req,res)=>{
    try {

      const id=  req.body.id
        const isemp= await employee.deleteOne({_id:id})
        
        if (isemp) {
                return res.status(200).send({
                 message:'emp-deleted'
                })
        }else{
            return res.status(400).send({
                message:'somthing wrong..'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}

const addProject=async (req,res)=>{

    try {

        const {pname,pcon,pedate,psdate,pcname}= req.body
        console.log(pcname);
        const newproject= new project({
            pname:pname,
            pcname:pcname,
            pcon:pcon,
            psdate:psdate,
            pedate:pedate
        })
        const result= await newproject.save()

        if(result){
            return res.status(200).send({
                message:'success'
             })
        }else{
            return res.status(400).send({
                message:'somthing wrong..'
            })
        }
    } catch (error) {
        console.log(error.message);
    }

}

const prjectget= async(req,res)=>{
    try {
        const projectdata= await project.find({})
        if(projectdata){
            res.status(200).send({
                projectdata:projectdata
            })
        }else{
            res.status(400).send({
                message:'somthing wrong...!'
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={
    adminLogin,
    getempdata,
    actions,
    deleteemp,
    addProject,
    prjectget
    
}