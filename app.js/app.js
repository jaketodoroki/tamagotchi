console.log('gelp')

//variables 

let health = 100
let happiness = 100
let hunger = 100
let timer = 5000 

//event listeners

// funtions 
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

// query selector 
//health
let healthy = document.querySelector('#health');
healthy.setAttribute('class','health');
healthy.innerHTML = `Happiness: ${health}`