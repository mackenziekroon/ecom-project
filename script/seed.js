'use strict'

const db = require('../server/db')
const {User, Inventory, Order, OrderDetails} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Dog',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Dog',
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Mackenzie',
      lastName: 'Kroon',
      email: 'mkroon@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Greta',
      lastName: 'Dog',
      email: 'gretawoofwoof@email.com',
      password: '123'
    })
  ])

  const inventory = await Promise.all([
    Inventory.create(
      {
        brandName: 'Holiday the Label',
        itemName: 'Check Swimsuit',
        size: 'S',
        colorName: 'Olive',
        quantity: 2,
        price: 103,
        image:
          'https://cdn.shopify.com/s/files/1/3044/4744/products/IMG_5136_2560x.jpg?v=1619640745',

        description:
          'Small olive check print high-cut swimsuit with a square neckline and spaghetti straps. 100% Lycra with 100% polyester lining, Designed in Australia, made in Indonesia',

        careInstructions: 'Hand wash',
        category: 'Swim',
        colorCategory: 'Green'
      },
      Inventory.create({
        brandName: 'Holiday the Label',
        itemName: 'Check Swimsuit',
        size: 'M',
        colorName: 'Olive',
        quantity: 2,
        price: 103,
        image:
          'https://cdn.shopify.com/s/files/1/3044/4744/products/IMG_5136_2560x.jpg?v=1619640745',

        description:
          'Small olive check print high-cut swimsuit with a square neckline and spaghetti straps. 100% Lycra with 100% polyester lining, Designed in Australia, made in Indonesia',

        careInstructions: 'Hand wash',
        category: 'Swim',
        colorCategory: 'Green'
      }),
      Inventory.create({
        brandName: 'Holiday the Label',
        itemName: 'Check Swimsuit',
        size: 'S',
        colorName: 'Olive',
        quantity: 2,
        price: 103,
        image:
          'https://cdn.shopify.com/s/files/1/3044/4744/products/IMG_5136_2560x.jpg?v=1619640745',

        description:
          'Small olive check print high-cut swimsuit with a square neckline and spaghetti straps. 100% Lycra with 100% polyester lining, Designed in Australia, made in Indonesia',

        careInstructions: 'Hand wash',
        category: 'Swim',
        colorCategory: 'Green'
      }),
      Inventory.create({
        brandName: 'Holiday the Label',
        itemName: 'Check Swimsuit',
        size: 'S',
        colorName: 'Camel',
        quantity: 2,
        price: 103,
        image:
          'https://cdn.shopify.com/s/files/1/3044/4744/products/IMG_5154_2560x.jpg?v=1619640783',

        description:
          'Small olive check print high-cut swimsuit with a square neckline and spaghetti straps. 100% Lycra with 100% polyester lining, Designed in Australia, made in Indonesia',

        careInstructions: 'Hand wash',
        category: 'Swim',
        colorCategory: 'Tan'
      })
    )
  ])

  const orders = await Promise.all([
    Order.create({isFulfilled: false, userId: 3})
  ])

  const orderDetails = await Promise.all([
    OrderDetails.create({quantity: 1, price: 200, orderId: 1, inventoryId: 1})
  ])

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
