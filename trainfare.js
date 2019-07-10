const request = require('request')

const station_code_from = "EUS"
const station_code_to = "CTR"

const trainFare = (station_code_from, station_code_to, callback) => {
    const url = `http://api.brfares.com/querysimple?orig=${station_code_from}&dest=${station_code_to}`
    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log(`hello1 ${response.body.fares}`)
            callback("Unable to connect to train service!", undefined)
        } else if (response.body.fares.length === 0) {
            console.log(`hello 2 ${response.body.fares}`)
            callback("Unable to find train station location, try again", undefined)
        } else {
            callback( undefined, response.body.fares[0].adult.fare
                
        );
        }
    })
}

trainFare('CTR','EUS', (error, response) => {
if (error) {
    console.log(error)
}
console.log(response)
})


