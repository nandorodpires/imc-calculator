const express = require('express')
const app = express()
const router = require('./routes')

const PORT = 8080

app.use(express.json())
app.use(router)
app.listen(PORT, () => {
    console.log(`API is running on ${PORT} port`)
})
