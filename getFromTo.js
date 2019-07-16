const request = require("request");
const rp = require("request-promise")
const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'
//below hard coded for testing
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

// const getFromTo = (fromStationCode, toStationCode, date, time) => {
    
//     const timetableURL = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${toStationCode}`;
    
//     rp({uri: timetableURL, json: true})
//         .then(body => {
//             const data = {
//                 departures: body.departures.all
//             };
//             // console.log(data.departures)
//             return data 
//         })
//         .catch(err => {
//             // console.log(err)
//             return (err)
//         })
// }
// getFromTo(fromStation,toStation,date,time) //for testing



const getFromTo = async function(fromStation, toStation, date, time, callback) {
    let url = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    console.log(url)
    

    request({ url, json: true }, (error, response) => {
        
     
        console.log(response.body)
        if (error) {
            callback('Unable to connect to train services', undefined);
        } else if (!response.body.departures || response.body.departures.all.length === 0) {
            callback("Unable to find train info. Try another search.", undefined);
  
        }else{ 
            let outboundResult = response.body.departures.all.filter((station) => {
                return station.destination_name === toStationName})
                callback(undefined, outboundResult)
        }
module.exports = getFromTo
