const express= require('express')

const routes=express() 

const companyController=require('../Controllers/companyController')
const employeeController=require('../Controllers/employeeController')


routes.post('login',companyController.logincompany)