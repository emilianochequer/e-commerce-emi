const User = require('./users');
const Review = require('./reviews');
const Product = require('./products');
const Order = require('./orders');
const Category = require('./categories');
const OrderDetail = require('./orderDetail');

User.hasMany(Review, { as: 'review' });
User.hasMany(Order, { as: 'orders' });
Review.belongsTo(Product, { as: 'product' });
Review.belongsTo(User, { as: 'user' });
Product.belongsToMany(Category, {
  through: 'products_categories',
});
Category.belongsToMany(Product, { through: 'products_categories' });

Product.hasMany(Review, { as: 'reviews' });
Order.belongsTo(User, { as: 'user' });
Product.belongsToMany(Order, { through: OrderDetail });
Order.belongsToMany(Product, { through: OrderDetail });

module.exports = {
  User,
  Review,
  Product,
  Order,
  Category,
  OrderDetail,
};
