


const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'

const getJourneyTime = (start, end) => {
    let dt1 = new Date(start)
    let dt2 = new Date(end)

    let seconds = (dt2.getTime()-dt1.getTime())/1000 //into secs
    let hours = parseInt(seconds/3600)
    seconds = seconds%3600
    let minutes = parseInt (seconds/60)
    seconds = seconds%60
    
    console.log(`start ${start} end = ${end} hours = ${hours} sec = ${seconds} min = ${minutes}`)
    if (minutes < 10) {return(`${hours}:0${minutes}`)} else {return (`${hours}:${minutes}`)}
}


const myFunction = () => {

    //clear form
    messageOne.textContent = ""
    messageTwo.textContent = ""
    messageThree.textContent = ""
    messageFour.textContent = ""
    messageFive.textContent = ""
    messageSix.textContent = ""
    error.textContent =""

    let from = depStation.value
    let to = ariStation.value
    let date = depDate.value
    let time = depTime.value

    fetch(`http://transportapi.com/v3/uk/train/station/${from}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${to}`)
    .then(response => {response.json()
    .then(data => {
    if (data.error) {
        console.log('error')
        messageOne.textContent = data.error
    } else {
        //check for no route (which does not return an error)
        if (data.departures.all.length == 0) {
            error.textContent = "There are no routes available"
        } else {
            let trainUID = data.departures.all[0].train_uid;

            fetch(`http://transportapi.com/v3/uk/train/service/train_uid:${trainUID}/${date}/timetable.json?app_id=${app_id}&app_key=${app_key}`)
            .then(response => {response.json()
            .then(data => {
                if (data.error) {
                    return (messageOne.textContent = data.error)
                } else {
                    let finalDestination = data.stops.length-1
                    let journeyTime = getJourneyTime(`${date} ${data.stops[0].aimed_departure_time}`, `${date} ${data.stops[finalDestination].aimed_arrival_time}`)
                    
                    //get fares if a route can be found 
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
                    })})//end fetch for fares

                    messageOne.textContent = data.stops[0].station_name
                    messageTwo.textContent = data.stops[0].aimed_departure_time
                    messageThree.textContent = data.destination_name
                    messageFour.textContent = data.stops[finalDestination].aimed_arrival_time
                    messageFive.textContent = journeyTime
                    console.log(`from = ${from} to = ${to} depart = ${data.stops[0].aimed_departure_time} arrive = ${data.stops[finalDestination].aimed_arrival_time}`)  
                } //end else
            })})//end .then 2nd fetch
        }//end else
    } //end else
    })})//end .then 1st fetch
}//end myFunction

// for running in browser to see json
// http://transportapi.com/v3/uk/train/station/CTR/2019-07-15/13:00/timetable.json?app_id=10385ce7&app_key=ff792051ed6e223340b30d3b25173108&destination=EUS
