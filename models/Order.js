const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {type: String, required: true},
        description: {type: String},
        products: [
            {
                productId: {type: String, required: true},
                qty: {type: Number, default: 1},
            }
        ],
        amount: {type: Number, default: 0},
        address: {type: Object},
        status: {type: String, default: "pending"},
    },{timestamps: true}
);

module.exports = mongoose.Model("Order", orderSchema);