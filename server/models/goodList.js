var mongoose = require("mongoose");

var goodListSchema = new mongoose.Schema({
    product_name: String,
    product_id: String,
    product_class: String,
    product_puprice: String,
    product_boxprice: String,
    product_saleprice: String,
    product_weight: String,
    product_shop: String,
    product_up: String,
    product_up_time: String,
    product_down_time: String,
    product_down: String,
    product_area: String,
    product_storage: String,
    product_positon: String,
    product_brand: String,
    product_keyword: String,
    product_mend: String,
    product_imgUrl: String
});

module.exports = mongoose.model("goodList", goodListSchema, "goodList");