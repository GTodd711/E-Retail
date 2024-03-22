const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

},
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);

module.exports = Tag;
