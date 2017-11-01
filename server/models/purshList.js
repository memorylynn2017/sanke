var mongoose = require("mongoose");

var purshListSchema = new mongoose.Schema({
    pursh_id: String,
    pursh_time: String,
    pursh_man: String
  
});

module.exports = mongoose.model("purshList", purshListSchema, "purshList");