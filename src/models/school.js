'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    name: {type:DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        notEmpty: { msg: "Name cannot be empty" }
      }
    },
    
    address: {type:DataTypes.STRING,
      allowNull: false, // required
      validate: {
        notEmpty: { msg: "Address cannot be empty" }
      }
    },
    latitude: {type:DataTypes.FLOAT,
            allowNull: false, // required
      validate: {
        isFloat: { msg: "Latitude must be a valid number" },
        notNull: { msg: "Latitude is required" },
        min: { args: [-90], msg: "Latitude must be between -90 and 90" },
        max: { args: [90], msg: "Latitude must be between -90 and 90" }
      }

    },
    longitude: {type:DataTypes.FLOAT,
      allowNull: false, // required
      validate: {
        isFloat: { msg: "Longitude must be a valid number" },
        notNull: { msg: "Longitude is required" },
        min: { args: [-180], msg: "Longitude must be between -180 and 180" },
        max: { args: [180], msg: "Longitude must be between -180 and 180" }
      }

    }
  }, {
    sequelize,
    modelName: 'School',
    tableName:'Schools',
    timestamps:true
  });
  return School;
};