const {School} = require('../models');
const CrudRepository=require('./crud-repository');
class SchoolRepository extends CrudRepository{
    constructor(){
        super(School);
    }
     async getAllSchools() {
    try {
      return await School.findAll();
    } catch (error) {
      throw error;
    }
  }
}
module.exports=SchoolRepository;