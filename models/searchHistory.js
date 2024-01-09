const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {
  
}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    term: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    result: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'history',
  }
);

module.exports = History;