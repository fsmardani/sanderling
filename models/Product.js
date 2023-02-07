const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, required: true},
        categories: {type: Array, required: true},
        brand: {type: String, required: true},
        size: {type: Array},
        color: {type: Array},
        price: {type: Number, default: 0},
        qty: {type: Number, default: 1},
        rate: {type: Number, default: 5},
    },{timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);