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

oSelectOne = oForm.elements["depart-station"];
index = oSelectOne.selectedIndex;
let selected_option_value = oSelectOne.options[index].value;


  let selected_index = oForm.elements["depstations"].selectedIndex;

  if (selected_index > 0){
      let selected_option_value = 
      oForm.elemets["depstations"].options[selected_index].value
  }
