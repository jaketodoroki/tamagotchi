console.log('gelp')

//variables 

let health = 100
let happiness = 100
let hunger = 100
let timer = 5000 

//event listeners

// funtions 

// query selector 
//health
let healthy = document.querySelector('#health');
healthy.setAttribute('class','health');
healthy.innerHTML = `Happiness: ${health}`