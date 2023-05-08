const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("../models/Product.js");
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INT,
      foreignKey: Product.id
    },
    tag_id: {
      type: DataTypes.INT,
      foreignKey: Tag.id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag"
  }
);

module.exports = ProductTag;
