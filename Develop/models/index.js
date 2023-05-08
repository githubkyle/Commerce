// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongTo(Category, {
  foreignKey: "id",
  onDelete: "CASCADE"
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "id",
  onDelete: "CASCADE"
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: "product_id"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: "product_id"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
