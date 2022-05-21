const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: string,
            required: true
        },
        featured: {
            type: Boolean,
            default: false 
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Partner = mongoose.model("partner", partnerSchema);

module.exports = Partner