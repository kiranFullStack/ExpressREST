const mongoose = require("mongoose")
const Schema = mongoose.Schema

var courseSchema = new Schema({
  title: String,
  level: String,
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model("Courses", courseSchema)
