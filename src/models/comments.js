const {Model, DataTypes} = require('sequelize');

class Comments extends Model{
static init(sequelize){
    super.init({
        message:DataTypes.TEXT,
        postId:DataTypes.INTEGER
    },{
      sequelize  
    })
    
}
static associate(models) {
  this.belongsTo(models.Post, { foreignKey: 'postId', as: 'owner' });
}
}

module.exports = Comments