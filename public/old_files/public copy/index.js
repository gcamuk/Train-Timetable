console.log(`I'm client side JS`)
const getFromTo = require('../getFromTo.js')

let fromInput = document.getElementById('fromInput')
let fromButton = document.getElementById('fromButton')
let toInput = document.getElementById('toInput')
let toButton = document.getElementById('toButton')

//below hard coded for testing
const fromStation = 'CTR'
const toStation = 'EUS'
const date = '2019-07-10'
const time = '13:00'

let from = ""
let to = ""

fromButton.addEventListener("click", (e) => {
  e.preventDefault();

  from = fromInput.value
  console.log(`from = ${from}`)

  toButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    to = toInput.value
    console.log(`to = ${to}`)

    getFromTo(fromStation,toStation,date,time,(error,{trainData}) => {  //for testing
        // getFromTo(req.query.from, req.query.to, 
        //             req.query.date, req.query.time,
        //             (error,{trainData})     => {
            if (error) {
                console.log(`error = ${trainData}`)
                return res.send (error)
            }
            res.send({trainData})
            console.log(trainData)
    })//end getFromTo

//     fetch(`/train?from=${from}`).then((response) => {
//         console.log(`from = ${from}`)
//             response.json().then((data) => {
//                 if (data.error) {
//                     messageOne.textContent = data.error
//                 } else {
//                     messageOne.textContent = data.trainData
//                 } //end else
//             })//end response
//     })//end fetch
//   })//end toButton
// })//end fromButton

