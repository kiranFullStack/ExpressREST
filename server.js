const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello from server home")
})

app.get("/courses", (req, res) => {
  res.send("Hello from server All courses")
})

app.get("/saved", (req, res) => {
  res.send("Hello from server saved courses")
})

app.listen(8080, () => console.log("Server Running on 8080🚀🚀🚀🚀🚀🚀🚀🚀🚀"))
