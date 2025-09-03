const BadRequest = require('../errors/badRequestError');
const {SchoolRepository}=require('../repositories');
const { getDistance } = require('../utils/helper/Haversine');

const schoolRepository=new SchoolRepository();

/**
 * Creates a new school record in the database
 * @param {Object} data - School details (name, address, latitude, longitude)
 * @returns {Promise<Object>} - Created school object
 */
async function createSchool(data){
    try {
        
        const response=await schoolRepository.create(data);
        return response;
    } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new BadRequest(explanation);
    }
    console.log(error);
    throw error;
  }

        
}
/**
 * List all schools sorted by proximity to the user's location
 */
async function listSchoolsByProximity(userLat, userLon) {
  try {
    // Validate input
    if (userLat === undefined || userLon === undefined) {
      throw new BadRequest("User latitude and longitude are required");
    }

    // Fetch all schools from DB
    const schools = await schoolRepository.getAllSchools();

    // Map with calculated distance
    const schoolsWithDistance = schools.map(school => {
      const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
      return {
        ...school.dataValues,
        distanceInKm: distance
      };
    });

    // Sort nearest to farthest
    return schoolsWithDistance.sort((a, b) => a.distanceInKm - b.distanceInKm);
  } catch (error) {
    throw error;
  }
}

module.exports={
    createSchool,
    listSchoolsByProximity
}