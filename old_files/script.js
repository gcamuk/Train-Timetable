console.log(`I'm client side JS`)
const reqauest = require("request")

const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'

let fromInput = document.getElementById('fromInput')
let fromButton = document.getElementById('fromButton')
let toInput = document.getElementById('toInput')
let toButton = document.getElementById('toButton')

//below hard coded for testing
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

let fromStationCode = ""
let toStationCode = ""

fromButton.addEventListener("click", (e) => {
  e.preventDefault();

  fromStationCode = fromInput.value
  console.log(`from = ${fromStationCode}`)

  toButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    toStationCode = toInput.value
    console.log(`to = ${toStationCode}`)
    
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
    })
}) //end get from 