console.log('gelp')

//variables 

let health ,happiness, hunger, timer

//event listeners
document.getElementById("health").addEventListener("click")
document.getElementById("happiness").addEventListener("click")
document.getElementById("hunger").addEventListener("click")
// query selector

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


