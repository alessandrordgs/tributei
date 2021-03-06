'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('posts', { 
     id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
     },
     title:{
       type:Sequelize.STRING,
       allowNull:false
     },
     body:{
       type:Sequelize.TEXT,
       allowNull:false
     },
     created_at:{
       type:Sequelize.DATE,
       allowNull:false,
     },
     updated_at:{
       type:Sequelize.DATE,
       allowNull:false,
     },

    
    
    });
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('posts');
    
  }
};
