const express= require('express')

const admincontroller= require('../Controllers/adminController')

const adminRoutes=express() 


adminRoutes.post('/login',admincontroller.adminLogin)
adminRoutes.get('/emp-data',admincontroller.getempdata)
adminRoutes.post('/emp-action',admincontroller.actions)
adminRoutes.post('/emp-delete',admincontroller.deleteemp)
adminRoutes.post('/addProject',admincontroller.addProject)



module.exports= adminRoutes