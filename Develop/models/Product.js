// import important parts of sequelize library
const { BOOLEAN } = require('sequelize');
const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    product_name:{
      type:DataTypes.STRING
    },
    
    price:{
      type:DataTypes.DECIMAL
    },

    stock:{
      type:DataTypes.INTEGER
    },
    
    category_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'category',
        key:'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
