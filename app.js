require('dotenv').config()
const express = require('express')
const{ userRouter } = require('./src/routes/user.router')
const app = express()
const port = Number(process.env.PORT) || 4000

app.use(express.json())

app.use('/api/v1/users', userRouter)

app.use((err, req, res, next) => {
  return res.status(err.status || 404).json({
    status: "Failed",
    message: err.message,
  })
})

app.listen(port, ()=> console.log(`To the glory of God server is listening on PORT: ${port}`))