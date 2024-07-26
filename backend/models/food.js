//npm install mongoose
let mongoose = require("mongoose")

let foodSchema = new mongoose.Schema({
    name         : String,
    type         : String,
    dayWeek      : String,
    description  : String,
    image        : String,       
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;