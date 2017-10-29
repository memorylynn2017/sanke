var mongoose = require("mongoose");

var orderListSchema = new mongoose.Schema({
    order_id: String,
    order_count: Number,
    order_price: Number,
    order_freight: Number,
    order_key: String

});

module.exports = mongoose.model("orderList", orderListSchema, "orderList");