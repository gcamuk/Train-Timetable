
const rp = require('request-promise')
const request = require('request')
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3006
const app = express();
const getFromTo = require('./getFromTo.js')
const trainFare = require('./trainfare')

//below hard coded for testing
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

// const publicDir = path.join(_dirname, './public')
// app.use(express.static(publicDir))

// app.get('/', (req, res) => {
//     if (!req.query.from || !req.query.to) {
//         return res.send('Please provide a departure and destination station')
//     } else {
//         // getFromTo(fromStation,toStation,date,time) //for testing
//         getFromTo(req.query.from, req.query.to, requ.query.date, req.query.time, (error,trainData))
//         console.log(trainData)
//     }
// })

app.get('/', (req, res) => {
if (!req.query.from || !req.query.to) {
    res.send('Please provide a departure and destination station')
} else {
    getFromTo(req.query.fromStation && req.query.toStation, (error, response ) => {
        if (error) {
            return res.send(error)
        }

        trainFare(req.query.fromStation, req.query.toStation, (error, response) => {
            if (error) {
                return res.send(error)
            }

            res.send({
                fromStation: response.fromStation,
                toStation: response.toStation,
                trainFare: response.fares
            })
            
            
        })
    })
}
}
)

app.listen(port, () => {
    console.log('server on port 3006')
})

//hardcoded for testing
console.log(`app.js = ${getFromTo(fromStation,toStation,date,time)}`)

