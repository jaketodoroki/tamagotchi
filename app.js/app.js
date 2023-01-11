console.log('gelp')

//variables 

// let health = 50
let happiness = 50
let hunger = 50
let cleanliness = 50
// let lose = health < 10; cleanliness < 10; happiness < 10
//time variables
let timeLeft = 50


const maxHappiness = 50
const maxHunger = 50
const maxCleanliness = 50
//cached element references
const play = document.getElementById("play")
const petBtn = document.getElementById("pet")
const feedBtn = document.getElementById("feed")
const cleanBtn = document.getElementById("clean")
const reset = document.getElementById("reset")
const happinessBar = document.getElementById("happinessBar")
const hungerBar = document.getElementById("hungerBar")
const cleanlinessBar = document.getElementById("cleanlinessBar")
const foodcontainer = document.getElementById('hungerContainer')
const happinessContainer = document.getElementById('happinessContainer')
const cleanlinessContainer = document.getElementById('cleanlinessContainer')
// animations
const img = document.getElementById("parent-img")

//  event listeners
play.addEventListener("click", startGame)
petBtn.addEventListener("click", pet )
feedBtn.addEventListener("click", feed)
cleanBtn.addEventListener("click", clean)
reset.addEventListener("click", resetGame)

render()

function render (){
    moodAnimation();
    hunger = maxHunger;
    happiness = maxHappiness;
    cleanliness = maxCleanliness;
    timeLeft = maxTime
}

function moodAnimation(){
    if (happiness < 50 || hunger < 50 || cleanliness < 50){
      img.src= "Assets/sad.gif"
    } else if(happiness < 45 || hunger < 45 || cleanliness < 45) {
        img.src = "Assets/normal.gif"
    }  else if(happiness >= 50 || hunger >= 50 || cleanliness >= 50) {
        img.src = "Assets/happy.gif"
    }

}
    
function pet(){
    if (happiness !== 0){
        happiness +=10;
        happinessContainer.style.width = `${happiness}%`
    }
}

function feed(){
    if (hunger !== 0){
        hunger +=10
        hungerContainer.style.width = `${hunger}%`
    }
}
function clean(){
    if(cleanliness !== 0){
        cleanliness += 10
        cleanlinessContainer.style.width = `${cleanliness}%`
    }
}

function resetGame(){
    // init()
    render()
    startGame()
}

//hunger timer function
function startGame(){
    render()
    // moodAnimation()
    let feedTmrLeft = setInterval(() => {
    feedTmr -= 1
    console.log("🚀 ~ file: app.js:113 ~ feedTmrLeft ~ feedTmr", feedTmr)
    if (feedTmr === 0 || feedTmr === 30 || feedTmr === 47){
        hunger -= 8;
        hungerContainer.style.width = `${hunger}%`
        clearInterval(feedTmrLeft)
    }
    }, 1000);
//clean timer function
    let cleanTmrLeft = setInterval(() => {
    cleanTmr -= 1
    console.log("🚀 ~ file: app.js:121 ~ cleanTmrLeft ~ cleanTmr", cleanTmr)
    if (cleanTmr === 0 || cleanTmr === 30 || cleanTmr === 48){
        cleanliness -= 10;
        cleanlinessContainer.style.width = `${cleanliness}%`
        clearInterval(cleanTmrLeft)
    }
    }, 2000);
//happy timer function 
    let happyTmrLeft = setInterval(() => {
    happyTmr -= 1
    console.log("🚀 ~ file: app.js:129 ~ happyTmrLeft ~ happyTmr", happyTmr)
    if (happyTmr === 0 || happyTmr === 30 || happyTmr === 47){
        happiness -= 9;
        happinessContainer.style.width = `${happiness}%`
        clearInterval(happyTmrLeft)
    }
    }, 1500);
}





