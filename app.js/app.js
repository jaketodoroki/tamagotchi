console.log('gelp')

//variables 

let health ,happiness, hunger, timer

//event listeners
document.getElementById("health").addEventListener("click")
document.getElementById("happiness").addEventListener("click")
document.getElementById("hunger").addEventListener("click")
// query selector

// funtions 
function play (){

}

//hunger function
const lowerHunger = function(){
    hunger -= 20
    if (hunger <= 0){
        clearInterval(hungerTime)
        triggerAllert()
    }
}

const hungerTime = () => {
    hungerTime = setInterval(lowerHunger, 1200)
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


