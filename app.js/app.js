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
const petBtn = document.getElementById("pet")
const feedBtn = document.getElementById("feed")
const cleanBtn = document.getElementById("clean")
const resetBtn = document.getElementById("reset")
const happinessBar = document.getElementById("happinessBar")
const hungerBar = document.getElementById("hungerBar")
const cleanlinessBar = document.getElementById("cleanlinessBar")
//stat bars
const foodcontainer = document.getElementById('hungerContainer')
const happinessContainer = document.getElementById('happinessContainer')
const cleanlinessContainer = document.getElementById('cleanlinessContainer')
// animations
const happyAnimation = "../Assets/happy.gif"
const sadAnimation = "../Assets/sad.gif"
const normalAnimation = "../Assets/normal.gif"
// event listeners
playBtn.addEventListener("click", startGame)
petBtn.addEventListener("click", pet )
feedBtn.addEventListener("click", feed)
cleanBtn.addEventListener("click", clean)
resetBtn.addEventListener("click", resetGame)


// funtions 
function init (){
    hunger = 50
    happiness = 50
    hunger = 50
}


function play (){

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


