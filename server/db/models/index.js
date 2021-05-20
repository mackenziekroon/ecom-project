const User = require('./user')
const Order = require('./order')
const Inventory = require('./inventory')
const OrderDetails = require('./orderDetails')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Order)
Order.belongsTo(User)

OrderDetails.belongsTo(Order)
OrderDetails.belongsTo(Inventory)

Order.belongsToMany(Inventory, {through: OrderDetails, foreignKey: 'orderId'})
Inventory.belongsToMany(Order, {
  through: OrderDetails,
  foreignKey: 'inventoryId'
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  Inventory,
  OrderDetails
}
