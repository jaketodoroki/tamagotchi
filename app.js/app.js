console.log('gelp')

//variables 

let health ,happiness, hunger, timer

//cached element references
const playBtn = document.getElementById("play")
const petBtn = document.getElementById("pet")
const feedBtn = document.getElementById("feed")
const cleanBtn = document.getElementById("clean")
const resetBtn = document.getElementById("reset")
const happinessBar = document.getElementById("happinessBar")
const hungerBar = document.getElementById("hungerBar")
const cleanlinessBar = document.getElementById("cleanlinessBar")

//timer
const foodTmr = document.getElementById('foodTimer')
const happinessTmr = document.getElementById('happinessTimer')
const cleanlinessTmr = document.getElementById('cleanlinessTimer')
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


