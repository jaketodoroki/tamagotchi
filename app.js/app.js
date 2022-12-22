console.log('gelp')

//variables 

let health 
let happiness
let hunger 
let timer

//time variables
let feedTmr = 10
let happyTmr = 10
let cleanTmr = 10


//cached element references
const playBtn = document.getElementById("play")
// console.log("🚀 ~ file: app.js:18 ~ playBtn", playBtn)
const petBtn = document.getElementById("pet")
// console.log("🚀 ~ file: app.js:20 ~ petBtn", petBtn)
const feedBtn = document.getElementById("feed")
// console.log("🚀 ~ file: app.js:22 ~ feedBtn", feedBtn)
const cleanBtn = document.getElementById("clean")
// console.log("🚀 ~ file: app.js:24 ~ cleanBtn", cleanBtn)
const resetBtn = document.getElementById("reset")
// console.log("🚀 ~ file: app.js:26 ~ resetBtn", resetBtn)
const happinessBar = document.getElementById("happinessBar")
// console.log("🚀 ~ file: app.js:28 ~ happinessBar", happinessBar)
const hungerBar = document.getElementById("hungerBar")
// console.log("🚀 ~ file: app.js:30 ~ hungerBar", hungerBar)
const cleanlinessBar = document.getElementById("cleanlinessBar")
// console.log("🚀 ~ file: app.js:32 ~ cleanlinessBar", cleanlinessBar)
//stat bars
const foodcontainer = document.getElementById('hungerContainer')
// console.log("🚀 ~ file: app.js:35 ~ foodcontainer", foodcontainer)
const happinessContainer = document.getElementById('happinessContainer')
// console.log("🚀 ~ file: app.js:37 ~ happinessContainer", happinessContainer)
const cleanlinessContainer = document.getElementById('cleanlinessContainer')
// console.log("🚀 ~ file: app.js:39 ~ cleanlinessContainer", cleanlinessContainer)
// animations
const happyAnimation = "../Assets/happy.gif"
// console.log("🚀 ~ file: app.js:42 ~ happyAnimation", happyAnimation)
const sadAnimation = "../Assets/sad.gif"
// console.log("🚀 ~ file: app.js:44 ~ sadAnimation", sadAnimation)
const normalAnimation = "../Assets/normal.gif"
// console.log("🚀 ~ file: app.js:46 ~ normalAnimation", normalAnimation)
// event listeners
playBtn.addEventListener("click", startGame)
petBtn.addEventListener("click", pet )
console.log("🚀 ~ file: app.js:50 ~ petBtn", petBtn)
feedBtn.addEventListener("click", feed)
cleanBtn.addEventListener("click", clean)
resetBtn.addEventListener("click", resetGame)



// funtions 
function init (){
    hunger = 50
    happiness = 50
    hunger = 50
}


function startGame(){
    
}

function pet(){
   console.log("🚀 ~ file: app.js:70 ~ pet ~ pet", pet)
   
    happiness = happiness + 10
}

function feed(){
    hunger = hunger + 10
}

function clean(){
    clean = clean + 10
}

function resetGame(){

}

//hunger function

function hungerTime (){
    if (hunger >= 100) {
        hunger = 100;
    }
    if (hunger !== 49){
        hunger -= 49;
        // hungerMsg.textContent = 
    }
} 
//sick function
const sick = function(){
    if(Math.floor((10)) %2=== 0){
        return true
    }
    return false
}
//happiness function
const happy = function (){
    if(health < 60 || hunger < 60 || happiness < 60){
        happiness -= 20
        //switch image, need to figure out how to add my gif
    }
}


