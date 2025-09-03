const { StatusCodes } = require('http-status-codes');
const {SchoolService}=require('../services');

/**
 * Controller to handle POST /createSchool
 * Creates a new school in the system
 */
async function createSchool(req,res,next){
    try {
        const response=await SchoolService.createSchool({
            name:req.body.name,
            address:req.body.address,
            longitude:req.body.longitude,
            latitude:req.body.latitude
        });
        return res.status(StatusCodes.CREATED).
        json({
            success:true,
            message:"School created Successfully",
            data:response
        })
    } catch (error) {
        next(error);// Passes error to global error handler
        
    }
}

/**
 * GET /listSchools
 * Query params: latitude, longitude
 */
async function listSchoolsByProximity(req, res, next) {
  try {
    const { latitude, longitude } = req.query;

    const response = await SchoolService.listSchoolsByProximity(
      parseFloat(latitude),
      parseFloat(longitude)
    );

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Schools fetched and sorted by proximity to user",
      data: response
    });
  } catch (error) {
    next(error);
  }
}
module.exports={
    createSchool,
    listSchoolsByProximity
}