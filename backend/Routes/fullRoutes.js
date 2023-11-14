const express= require('express')

const routes=express() 

const companyController=require('../Controllers/companyController')
const employeeController=require('../Controllers/employeeController')


routes.post('/companylogin',companyController.logincompany)

routes.post('/employeregister',employeeController.registerEmployee)
routes.post('/otpverify',employeeController.verifyotp)


module.exports = routes