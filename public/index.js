// function myFunction() {
//     var x = document.getElementById("myForm").elements[0].value;
//     document.getElementById("demo").innerHTML = x;
// }

// console.log(x)

oList = oForm.elements["depart-station"]

const getDepartStation (oList) => {
    let sdValues = []
    for (let i=1; i < oList.options.length; i++)
    {
        if (oList.options [i].selected == true)
        {
            sdValues.push(oList.options[i].value)
        }
    
    }
    console.log(test)
}
