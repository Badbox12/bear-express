const express = require('express')
const product = require('./api/product');
const app = express()

PORT = process.env.PORT || 5000


app.use('/api/product', product)
app.listen(PORT, ()=> {
    `server is running on Port ${PORT}`
})
