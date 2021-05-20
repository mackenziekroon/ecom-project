const router = require('express').Router()
const {Inventory} = require('../db/models')
module.exports = router

// mounted on /inventory

// get ALL products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Inventory.findAll()
    res.send(allProducts)
  } catch (error) {
    next(error)
  }
})

// get single product by ID
router.get('/:id', async (req, res, next) => {
  try {
    let singleProduct = await Inventory.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(singleProduct)
  } catch (error) {
    next(error)
  }
})
