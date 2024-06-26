//stores the current value
let curVal = 0
//constants for the labels
const curLabel = "Current: "
const hScoreLabel = "HighScore: "

//Creates a new item in localStorage if there is not already one
if(!localStorage.getItem("Value")){
    localStorage.setItem("Value", 0)
}

//Styles the body
const body = document.body
body.style.display = "flex"
body.style.height = "100vh"
body.style.width = "100vw"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.paddingTop = "0"
body.style.marginTop = "0"

//Creates the heading
const heading = document.createElement("h1")
heading.innerHTML = "Counting"
heading.style.margin = "0.5rem"
heading.style.fontSize = "5rem"
// heading.st
body.appendChild(heading)

//Creates text for the curNum
const curNum = document.createElement("div")
curNum.innerHTML = curLabel + curVal
curNum.style.margin = "0.5rem"
curNum.style.fontSize = "2rem"
// curNum.style.height = "1rem"
body.appendChild(curNum)

//Creates the button
const btn = document.createElement("button")
btn.style.height = "4rem"
btn.style.width = "10rem"
btn.style.margin = "0.5rem"
btn.style.fontSize = "2rem"
btn.innerHTML = "CLICK"
body.appendChild(btn)
// btn.style.touchAction = "none"

//Creates text for the highScore
const highScore = document.createElement("div")
highScore.innerHTML = hScoreLabel + localStorage.getItem("Value")
curNum.style.margin = "0.5rem"
highScore.style.fontSize = "2rem"
// curNum.style.height = "1rem"
body.appendChild(highScore)

//EventListener for the button
btn.addEventListener("click", inc)

//Function performed when clicking
function inc(){
    //curVal is incremented and curNum updated
    curVal++
    curNum.innerHTML = curLabel + curVal
    //highScore is updated if necessary
    if(curVal > Number(localStorage.getItem("Value"))){
        localStorage.setItem("Value", Number(localStorage.getItem("Value")) + 1)
        highScore.innerHTML = hScoreLabel + localStorage.getItem("Value")
    }
}