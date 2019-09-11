const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv/config")

const Courses = require("./models/Courses")

const app = express()

//
// ─── CONNECT TO DB USING MONGOOSE ────────────────────────────────────────────────────────────────
//

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB🥁 🥁 🥁 🥁 🥁 🥁 🥁 🥁 🥁 🥁 🥁")
})
//
// ─── MIDDLEWARES ────────────────────────────────────────────────────────────────
//
// body-parser
app.use(bodyParser.json())

app.use("/courses", () => {
  console.log("This is the middleware for the route /")
})

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

// app.get("/", (req, res) => {
//   res.send("Hello from server home")
// })

app.get("/", (req, res) => {
  Courses.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get("/:id", (req, res) => {
  Courses.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.post("/", async (req, res) => {
  const course = new Courses(req.body)

  try {
    const postedCourse = await course.save()
    res.send(postedCourse)
  } catch (error) {
    res.send(error)
  }
})

// app.post("/", (req, res) => {
//   //   var course = new Courses({
//   //     title: req.body.title,
//   //     level: req.body.level,
//   //     completed: req.body.completed
//   //   })
//   const course = new Courses(req.body)
//   course
//     .save()
//     .then(result => res.send(result))
//     .catch(err => console.log(err))
// })

app.patch("/:id", (req, res) => {
  Courses.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.delete("/:id", (req, res) => {
  Courses.findByIdAndDelete(req.params.id)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

//
// ─── SERVER LISTENING ───────────────────────────────────────────────────────────
//

app.listen(8080, () =>
  console.log("Server Running on 8080🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀")
)
