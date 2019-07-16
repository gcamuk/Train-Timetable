


const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'

const getJourneyTime = (start, end) => {
    let dt1 = new Date(start)
    let dt2 = new Date(end)

    console.log(`start ${start} end = ${end} dt1=${dt1} dt2=${dt2}`)
}


const myFunction = () => {

    let from = depStation.value
    let to = ariStation.value
    let date = depDate.value
    let time = depTime.value

    fetch(`http://api.brfares.com/querysimple?orig=${from}&dest=${to}`)
    .then(response => {response.json()
    .then(data => {
        if (data.error) {
            messageSix = data.error
        } else {
            function convert(sum){
                return "£"+(sum / 100).toFixed(2);
            }
            messageSix.textContent = convert(data.fares[0].adult.fare);
        }
    })
})

    fetch(`http://transportapi.com/v3/uk/train/station/${from}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${to}`)
    .then(response => {response.json()
    .then(data => {
    if (data.error) {
        messageOne.textContent = data.error
    } else {

        let trainUID = data.departures.all[0].train_uid;

        fetch(`http://transportapi.com/v3/uk/train/service/train_uid:${trainUID}/${date}/timetable.json?app_id=${app_id}&app_key=${app_key}`)
        .then(response => {response.json()
        .then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                let finalDestination = data.stops.length-1
                let journeyTime = getJourneyTime(data.stops[0].aimed_departure_time, data.stops[finalDestination].aimed_arrival_time)

                messageOne.textContent = data.origin_name
                messageTwo.textContent = data.stops[0].aimed_departure_time
                messageThree.textContent = data.destination_name
                messageFour.textContent = data.stops[finalDestination].aimed_arrival_time
                messageFive.textContent = "journeyTime"
                // messageSix.textContent = "Fare"
                console.log(`from = ${from} to = ${to} depart = ${data.stops[0].aimed_departure_time} arrive = ${data.stops[finalDestination].aimed_arrival_time}`)  
            } //end else
        })})//end .then 2nd fetch
    }//end else
    })})//end .then 1st fetch
}//end myFunction

// for runningh in browser to see json
// http://transportapi.com/v3/uk/train/station/CTR/2019-07-15/13:00/timetable.json?app_id=10385ce7&app_key=ff792051ed6e223340b30d3b25173108&destination=EUS
