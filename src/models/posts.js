const {Model, DataTypes} = require('sequelize');

class Posts extends Model{
    static init(sequelize){
        super.init({
         title:DataTypes.STRING,
         body:DataTypes.TEXT
        },{
            sequelize
        })
    }
}

module.exports = Posts