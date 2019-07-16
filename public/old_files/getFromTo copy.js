
const rp = require("request-promise")
const request = require("request")

const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'
//below hard coded for testing
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

const getFromTo = (fromStationCode, toStationCode, date, time) => {
    
    const timetableURL = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${toStationCode}`;
    
    request ({url:timetableURL, json:true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to train information service")
            console.log("Unable to connect to train information service")
        } else {
            callback (undefined, {
                departures: body.departures.all
            })
            console.log(`departures ${data.departures}`)
        }
    })
}
// getFromTo(fromStation,toStation,date,time) //for testing

module.exports = getFromTo
