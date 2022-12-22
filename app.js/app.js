console.log('gelp')

//variables 

// let health = 50
let happiness = 50
let hunger = 50
let cleanliness = 50
// let lose = health < 10; cleanliness < 10; happiness < 10
//time variables
let feedTmr = 10
let happyTmr = 10
let cleanTmr = 10


//cached element references
const play = document.getElementById("play")
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
const img = document.getElementById("parent-img")
// const happyAnimation = "../Assets/happy.gif"
// // console.log("🚀 ~ file: app.js:42 ~ happyAnimation", happyAnimation)
// const sadAnimation = "../Assets/sad.gif"
// // console.log("🚀 ~ file: app.js:44 ~ sadAnimation", sadAnimation)
// const normalAnimation = "../Assets/normal.gif"
// // console.log("🚀 ~ file: app.js:46 ~ normalAnimation", normalAnimation)
// // event listeners
play.addEventListener("click", startGame)
petBtn.addEventListener("click", pet )
feedBtn.addEventListener("click", feed)
cleanBtn.addEventListener("click", clean)
resetBtn.addEventListener("click", resetGame)



// funtions 
init()

function init (){
    hunger = 100;
    happiness = 100;
    cleanliness = 100;
    moodAnimation();
}
function render (){

}

function moodAnimation(){
    if (happiness < 30 || hunger < 30 || cleanliness < 30){
      img.src= "Assets/sad.gif"
    } else if(happiness < 50 || hunger < 50 || cleanliness < 50) {
        img.src = "Assets/normal.gif"
    }  else if(happiness > 70 || hunger > 70 || cleanliness > 70) {
        img.src = "Assets/happy.gif"
    }

}


    


function pet(){
//    console.log("🚀 ~ file: app.js:70 ~ pet ~ pet", pet)
    if (happiness !== 0){
        happiness +=10;
    }
}

function feed(){
    // console.log("🚀 ~ file: app.js:90 ~ feed ~ feed", feed)
    if (hunger !== 0){
        hunger +=10
    }
}
function clean(){
    // console.log("🚀 ~ file: app.js:96 ~ clean ~ clean", clean)
    if(cleanliness !== 0){
        cleanliness += 10
    }
}


function resetGame(){

}

//hunger timer function
function startGame(){
    console.log("🚀 ~ file: app.js:112 ~ startGame ~ startGame", startGame)
    
let feedTmrLeft = setInterval(() => {
    feedTmr -= 1
    console.log("🚀 ~ file: app.js:113 ~ feedTmrLeft ~ feedTmr", feedTmr)
    if (feedTmr === 0){
        hunger -= 10;
        clearInterval(feedTmrLeft)
    }
}, 1000);
//clean timer function
let cleanTmrLeft = setInterval(() => {
    cleanTmr -= 1
    // console.log("🚀 ~ file: app.js:121 ~ cleanTmrLeft ~ cleanTmr", cleanTmr)
    if (cleanTmr === 0){
        cleanliness -= 10;
        clearInterval(cleanTmrLeft)
    }
}, 1000);
//happy timer function 
let happyTmrLeft = setInterval(() => {
    happyTmr -= 1
    // console.log("🚀 ~ file: app.js:129 ~ happyTmrLeft ~ happyTmr", happyTmr)
    if (happyTmr === 0){
        happiness -= 10;
        clearInterval(happyTmrLeft)
    }
}, 1000);
}





