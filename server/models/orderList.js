var mongoose = require("mongoose");

var orderListSchema = new mongoose.Schema({
    purchase_id: String,
    purchase_count: Number,
    purchase_price: Number,
    purchase_freight: Number,
    purchase_key: String,
    purchase_leval: String,
    purchase_goodsman: String,
    purchase_area: String,
    purchase_areasend: String,
    purchase_purstatus: String,
    purchase_senstatus: String,
    purchase_paystatus: String,
    purchase_times: String

});

module.exports = mongoose.model("orderList", orderListSchema, "orderList");