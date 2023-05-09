const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("../models/Product.js");
const Tag = require("../models/Tag.js");
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: Product.id
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: Tag.id
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
