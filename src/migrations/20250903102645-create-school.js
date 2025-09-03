'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false, 
        validate: {
          min: -90,
          max: 90
        }
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false, 
        validate: {
          min: -180,
          max: 180
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schools');
  }
};