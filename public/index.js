//run using go live

console.log(`I'm client side JS`)

const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'

let fromInput = document.getElementById('fromInput')
let fromButton = document.getElementById('fromButton')
let toInput = document.getElementById('toInput')
let toButton = document.getElementById('toButton')
let findButton = document.getElementById('findButton')

findButton.addEventListener("click", (e) => {
    e.preventDefault(); //or resets the form before the vlaues are passed!

    let from = fromInput.value
    let to = toInput.value
    let date = dateInput.value
    let time = timeInput.value



    fetch(`http://transportapi.com/v3/uk/train/station/${from}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${to}`)
    .then(response => {response.json()
    .then(data => {
    if (data.error) {
        messageOne.textContent = data.error
    } else {
        messageOne.textContent = data.departures.all[0].aimed_departure_time
        messageTwo.textContent = data.departures.all[0].aimed_arrival_time
        console.log(data)
    }
})})
})


// for runningh in browser to see json
// http://transportapi.com/v3/uk/train/station/CTR/2019-07-15/13:00/timetable.json?app_id=10385ce7&app_key=ff792051ed6e223340b30d3b25173108&destination=EUS