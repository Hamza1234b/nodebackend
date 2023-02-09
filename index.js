const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send(`<form method="post" action="/username">
  <label>username</label>
  <input type= "text" name="username" />
  </form>`)
})

app.post("/username", (req, res) => {
  const enteredUsername = req.body.username
  console.log(enteredUsername)
})

app.listen(3000)
