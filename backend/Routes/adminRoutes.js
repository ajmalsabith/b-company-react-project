const express= require('express')

const admincontroller= require('../Controllers/adminController')

const adminRoutes=express() 


adminRoutes.post('/login',admincontroller.adminLogin)



module.exports= adminRoutes