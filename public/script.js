
// function myFunction() {
//     var x = document.getElementById("myForm").elements[0].value;
//     document.getElementById("demo").innerHTML = x;
// }

// console.log(x)

// const oList = oForm.elements("depart-station")

// const getDepartStation = (oList) => {
//     let sdValues = []
//     for (let i = 1; i < oList.options.length; i++)
//     {
//         if (oList.options [i].selected == true)
//         {
//             sdValues.push(oList.options[i].value)
//         }
//         console.log(test)
//     }
// }


// document.getElementById('myForm').addEventListener('click').serializeArray() => {
//     console.log()
// }

// const myFunction = () => {
//     document.getElementById("myForm").submit();
//   }

//   console.log("myForm")

// oSelectOne = oForm.elements["depart-station"];
// index = oSelectOne.selectedIndex;
// let selected_option_value = oSelectOne.options[index].value;


//   let selected_index = oForm.elements["depstations"].selectedIndex;

//   if (selected_index > 0){
//       let selected_option_value = 
//       oForm.elemets["depstations"].options[selected_index].value
//   }

//run using go live

console.log(`I'm client side JS`)

const app_id = '10385ce7'
const app_key = 'ff792051ed6e223340b30d3b25173108'

// let from = document.getElementById('depStation')
// let to = document.getElementById('ariStation')
// let date = document.getElementById('depDate')
// let time = document.getElementById('depTime')

const myFunction = () => {

    let from = depStation.value
    let to = ariStation.value
    let date = depDate.value
    let time = depTime.value

    fetch(`http://transportapi.com/v3/uk/train/station/${from}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${to}`)
    .then(response => {response.json()
    .then(data => {
    if (data.error) {
        messageOne.textContent = data.error
    } else {
        let trainUID = data.departures.all[0].train_uid

        fetch(`http://transportapi.com/v3/uk/train/service/train_uid:${trainUID}/${date}/timetable.json?app_id=${app_id}&app_key=${app_key}`)
        .then(response => {response.json()
        .then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                let finalDestination = data.stops.length-1
                messageOne.textContent = data.origin_name
                messageTwo.textContent = data.stops[0].aimed_departure_time
                messageThree.textContent = data.destination_name
                messageFour.textContent = data.stops[finalDestination].aimed_arrival_time
                messageFive.textContent = "Journey Time"
                messageSix.textContent = "Fare"
                console.log(`from = ${from} to = ${to} depart = ${data.stops[0].aimed_departure_time} arrive = ${data.stops[finalDestination].aimed_arrival_time}`)  
            } //end else
        })})//end .then 2nd fetch
    }//end else
    })})//end .then 1st fetch
}//end myFunction



//     fetch(`http://transportapi.com/v3/uk/train/station/${from}/${date}/${time}/timetable.json?app_id=${app_id}&app_key=${app_key}&destination=${to}`)
//     .then(response => {response.json()
//     .then(data => {
//     if (data.error) {
//         messageOne.textContent = data.error
//     } else {
//         messageOne.textContent = data.departures.all[0].aimed_departure_time
//         messageTwo.textContent = data.departures.all[0].aimed_arrival_time
//         console.log(data)
//     }
// })})


    // fetch(`http://api.brfares.com/querysimple?orig=${station_code_from}&dest=${station_code_to}`)
    // .then(response => {response.json()
    // .then(data => {
    //     if (data.error) {
    //         messageThree.textContent = data.error
    //     } else {
    //         messageThree.textContent = response.body.fares[0]
    //     }
    // })})
    
    
    

    
       


// for runningh in browser to see json
// http://transportapi.com/v3/uk/train/station/CTR/2019-07-15/13:00/timetable.json?app_id=10385ce7&app_key=ff792051ed6e223340b30d3b25173108&destination=EUS
