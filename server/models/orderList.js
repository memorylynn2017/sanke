var mongoose = require("mongoose");

var orderListSchema = new mongoose.Schema({
    order_id: String,
    order_fetch: String,
    order_count: Number,
    order_price: Number,
    order_freight: Number,
    order_leval: String,
    order_area: String,
    order_areasend: String,
    order_areasendkg: String,
    order_paymethod: String,
    order_purstatus: String,
    order_senstatus: String,
    order_paystatus: String,
    order_purnum: String,
    order_suppler: String,
    order_sendm: String,
    order_goodsman: String,
    order_times: String

});


module.exports = mongoose.model("orderList", orderListSchema, "orderList");