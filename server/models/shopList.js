var mongoose = require("mongoose");

var shopListSchema = new mongoose.Schema({
    shop_id: String,
    shop_type: Number,
    shop_name: String,
    shop_short: String,
    shop_password: String,
    shop_confirm: String,
    shop_level: String,
    shop_accout: String,
    shop_credit: String,
    shop_cr_human: String,
    shop_cr_weixi: String,
    shop_cr_address: String,
    shop_cr_telephone: String,
    shop_auth: Number,
    shop_scope: String,
    shop_market: String,
    shop_area: String,
    shop_Stall: String,
    shop_floor: String,
    shop_contact: String,
    shop_ranking: String,
    shop_time: String,
    shop_status: Number,
    shop_edit: String,
    shop_Crawling: String
});

module.exports = mongoose.model("shopList", shopListSchema, "shopList");