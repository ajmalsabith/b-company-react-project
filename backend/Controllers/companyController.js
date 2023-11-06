const company = require("../Models/company");

const logincompany = async (req, res) => {
  try {

    const dataexist = await company.findOne().lean();

    if (!dataexist) {
        const newdata = new company({
            name: "b-Company",
            address: "calicut syberpark 676712 4 th floor",
            image: "",
            about:"software technolagy building dynamic web applications and mobile appli…",
            phone: 888333787,
          });
      

          const result= await newdata.save()
          if(result){
            console.log(result+'resulte');
          }
    }
   

   
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
        res.send({
          message: "success",
        });
      } else {
        res.status(400).send({
          message: "your passsword or email is incorrect",
        });
      }
    } else {
      res.status(400).send({
        message: "somthing wrong..!",
      });
    }
  } catch (err) {
    console.log(err.error);
  }
};

module.exports = {
  logincompany,
};
