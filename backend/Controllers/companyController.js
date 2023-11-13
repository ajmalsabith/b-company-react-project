const company = require("../Models/company");

const logincompany = async (req, res) => {
  try {

    const dataexist = await company.findOne({})


    if (!dataexist) {
        const newdata = new company({
            name: "b-Company",
            address: "calicut syberpark 676712 4 th floor",
            about:"software technolagy building dynamic web applications and mobile appli…",
            phone: 888333787,
          });


          const result= await newdata.save()
          if(result){
            console.log('neothosf');

            console.log(result);

          }
    }else{
      console.log("reach here..");
      const companyemail = req.body.email;
      console.log(companyemail);
      const password = req.body.password;
  
        const companyData = await company.findOne()
        console.log(companyData);
      
      if (companyData) {
        if (
          companyData.email == companyemail &&
          companyData.password == password
        ) {
          console.log("datasent 2");
          res.status(200).send({
            message: "register success",
          });
        } else {
          console.log("data sent1");
          res.status(400).send({
            message: "your passsword or email is incorrect",
          });
        }
      } else {
        console.log("data sent");
        res.status(400).send({
          message: "somthing wrong..!",
        });
      }
    }
   

   
    
  } catch (err) {
    console.log(err.error);
  }
};

module.exports = {
  logincompany,
};
