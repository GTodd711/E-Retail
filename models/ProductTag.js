// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tags',
        key: 'id',
      },
    },

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tags',
  }
);

module.exports = ProductTag;
