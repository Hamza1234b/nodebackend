const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: false }))

let usersUsername
app.get("/", (req, res) => {
  res.send(`<form method="post" action="/username">
  <label>username</label>
  <input type= "text" name="username" />
  </form>
  <h1>${usersUsername ? usersUsername : "There is no username"}`)
})

app.post("/username", (req, res) => {
  const enteredUsername = req.body.username
  usersUsername = enteredUsername
  res.redirect("/")
})

app.listen(3000)
