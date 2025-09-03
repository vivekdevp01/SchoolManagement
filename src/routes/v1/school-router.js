const express=require('express');

const {SchoolController}=require('../../controllers');
const { SchoolMiddleware } = require('../../middlewares');

const router=express.Router();

router.post("/addSchool",
    SchoolMiddleware.validateRequest(["name","address","longitude","latitude"])
,    SchoolController.createSchool);

router.get("/listSchools",SchoolController.listSchoolsByProximity);

module.exports=router;