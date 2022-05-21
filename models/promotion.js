const mongoose = require('mongoose')
const Schema = mongoose.Schema

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true
        },
        Image: {
            type: String,
            required: true,
            unique: true
        },
        Featured: {
            type: Boolean,
            default: false
        },
        Cost: {
            type: Currency,
            required: true,
            min: 0
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Promotion = mongoose.model("promotion", promotionSchema);

module.exports = Promotion;