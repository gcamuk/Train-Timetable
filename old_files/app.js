
const path = require('path')
const port = process.env.PORT || 3002
const express = require('express')

const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))

app.listen(port, () => {
    console.log('server on port 3002')
})

