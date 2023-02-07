const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user: {type: String, required: true},
        description: {type: String},
        products: [
            {
                productId: {type: String, required: true},
                qty: {type: Number, default: 1},
            }
        ]
    },{timestamps: true}
);

module.exports = mongoose.model("Cart", cartSchema);