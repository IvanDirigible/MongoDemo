const mongoose = require('mongoose')



mongoose.connect("mongodb://localhost:27017/mongodemo")


module.exports = mongoose.connection