
const rp = require("request-promise")
const express = require('express')
const path = require('path')
const app = express();
const getFromTo = require('./getFromTo.js')

const publicDir = path.join(_dirname, './public')
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    if (!req.query.from || !req.query.to) {
        return res.send('Please provide a departure and destination station')
    } else {
        getFromTo
    }
})