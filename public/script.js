
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

let from = document.getElementById('depStation')
let to = document.getElementById('ariStation')
let date = document.getElementById('depDate')
let time = document.getElementById('depTime')

const myFunction = () => {
    //or resets the form before the vlaues are passed!

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
        messageOne.textContent = data.departures.all[0].aimed_departure_time
        messageTwo.textContent = data.departures.all[0].aimed_arrival_time
        console.log(data)
    }
})})
}



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



// for runningh in browser to see json
// http://transportapi.com/v3/uk/train/station/CTR/2019-07-15/13:00/timetable.json?app_id=10385ce7&app_key=ff792051ed6e223340b30d3b25173108&destination=EUS
