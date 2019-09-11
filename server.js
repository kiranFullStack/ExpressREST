const express = require("express")
const mongoose = require("mongoose")

const app = express()

//
// ─── CONNECT TO DB USING MONGOOSE ────────────────────────────────────────────────────────────────
//

mongoose.connect(
  "mongodb+srv://kiran:kiran@devedcluster-ywrkw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to MongoDB🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁")
  }
)
//
// ─── MIDDLEWARES ────────────────────────────────────────────────────────────────
//

app.use("/courses", () => {
  console.log("This is the middleware for the route /")
})

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

app.get("/", (req, res) => {
  res.send("Hello from server home")
})

app.get("/courses", (req, res) => {
  res.send("Hello from server All courses")
})

app.get("/saved", (req, res) => {
  res.send("Hello from server saved courses")
})

//
// ─── SERVER LISTENING ───────────────────────────────────────────────────────────
//

app.listen(8080, () => console.log("Server Running on 8080🚀🚀🚀🚀🚀🚀🚀🚀🚀"))
