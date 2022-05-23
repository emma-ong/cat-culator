let prevValue = 0
let arr = []

document.addEventListener("DOMContentLoaded", loadPage())

function loadPage() {
  document.querySelector(".screen").innerHTML = 0
  addClicks()
}

//Add click function to buttons
function addClicks() {
  let buttons = document.querySelectorAll("button")
  //Add outputs to symbols
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      let symbol = event.target.innerHTML
      //if i is a button or . and not a =
      if ((i > 2 || i === 8) && (i !== 7)) {
          arr.push(symbol)
          updateScreen(arr.join(""))
        //if equals sign is clicked 
        //save existing arr to prevValue  
      } else if (i === 7) {
        let answer = eval(arr.join(""))
        prevValue = answer
        arr = []
        arr.push(answer)
        updateScreen(arr)
      } else {
        switch (symbol) {
          case "AC":
            arr = []
            updateScreen(arr)
            break;
          case "C":
            //remove last index element
            arr.splice(arr.length - 1, 1)
            updateScreen(arr.join(""))
            break;
          case "+/-":
            if (arr[0] !== '-') {
              arr.unshift('-')
            } else {
              arr.splice(0, 1)
            }
            updateScreen(arr.join(""))
            break;
          case "%":
            let string = arr.join("")
            let answer = eval(string / 100)
            arr = []
            arr.push(answer)
            updateScreen(arr)
            break;
        }
      }
      if(arr.length > 0){
        document.querySelector(".cancel").innerHTML = "C"
      } else {
        document.querySelector(".cancel").innerHTML = "AC"
      }
      

    })
  }

}

//update screen to reflect what is in screenArr (from addClicks())
function updateScreen(value) {
  document.querySelector(".screen").innerHTML = value
}