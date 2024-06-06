
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String, required: true
    },

    email: {
        type: String, required: true
    },

    password: {
        type: String, required: true
    },

    balance: {
        type: String, default: 0
    },

    active: {type: Boolean, default:true},

    // role: { type: String, default: "user"} admin, moderator
   

},  {timestamps: true})

const users = new mongoose.model("sers", userSchema)

module.exports = users