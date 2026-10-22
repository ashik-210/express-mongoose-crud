const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/usersDB").then(() => console.log("mongodb cont sussful")
).catch((err) => console.log(err.message)
);

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    image : String
})

module.exports = mongoose.model('user',userSchema);

