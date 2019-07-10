
const rp = require("request-promise")
const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

const getFromTo = (fromStationCode, toStationCode, date, time) => {
    
    const timetableURL = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${toStationCode}`;
    
    rp({uri: timetableURL, json: true})
    .then(body => {
       const data = {
            departures: body.departures.all
        };
        console.log(data.departures)  
    })

    .catch(err => {
        // console.log(err)
        return (err)
    })
}

module.exports = getFromTo
