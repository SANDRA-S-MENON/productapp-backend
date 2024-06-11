const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "id":String,
        "description":String,
        "expirydate":String
    }
)
let productmodel= mongoose.model("products",schema);
module.exports={productmodel}

