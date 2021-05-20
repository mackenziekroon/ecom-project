const Sequelize = require('sequelize')
const db = require('../db')

const Inventory = db.define('inventory', {
  brandName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  itemName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  colorName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  image: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  careInstructions: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Tops', 'Bottoms', 'Shoes', 'Outerwear', 'Dresses', 'Swim']]
    }
  },
  // subCategory: {
  //   type: Sequelize.STRING,
  //   validate: {
  //     isIn: [['Sandal', 'Sneaker', 'Boot']],
  //   },
  // },
  colorCategory: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Tan']]
    }
  }
})

module.exports = Inventory
