const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Types.ObjectId
        },
        store: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: String
        },
        date: {
            type: String
        }
    }
)

module.exports = mongoose.model('products', ProductSchema)