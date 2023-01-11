console.log('gelp')

//variables 

// let health = 50
let happiness = 50
let hunger = 50
let cleanliness = 50
// let lose = health < 10; cleanliness < 10; happiness < 10
//time variables
let timeLeft = 50

const maxTime = 50
const maxHappiness = 50
const maxHunger = 50
const maxCleanliness = 50
//cached element references
const play = document.getElementById("play")
const petBtn = document.getElementById("pet")
const feedBtn = document.getElementById("feed")
const cleanBtn = document.getElementById("clean")
const resetBtn = document.getElementById("reset")
const hungerContainer = document.getElementById('hungerContainer')
const happinessContainer = document.getElementById('happinessContainer')
const cleanlinessContainer = document.getElementById('cleanlinessContainer')
const status = document.getElementById('status')

const countdown = document.getElementById('timeLeft')
// animations
const img = document.getElementById("parent-img")

//  event listeners
play.addEventListener("click", startGame)
petBtn.addEventListener("click", pet )
feedBtn.addEventListener("click", feed)
cleanBtn.addEventListener("click", clean)
resetBtn.addEventListener("click", resetGame)

render()

function render (){
    moodAnimation();
    hunger = maxHunger;
    happiness = maxHappiness;
    cleanliness = maxCleanliness;
    timeLeft = maxTime
}

function moodAnimation(){
    if (happiness < 30 || hunger < 30 || cleanliness < 30){
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
    location.reload()
}

function startGame(){
    let timer = setInterval(function (){
        moodAnimation()
        countdown.textContent = timeLeft + 'seconds remaining'
        if(happiness <= 0 || hunger <= 0 || cleanliness <= 0){
            countdown.textContent = 'Game Over'
            clearInterval(timer)
            gameOver()
        }
        reduceContainer()
        timeLeft -= 1
        if (timeLeft < 0){
            countdown.textContent = 'You Win!! Jakey Loves You!'
            clearInterval(timer)
            gameWin()
        }
    }, 1000) 
}   

function reduceContainer(){
    happiness = happiness -4;
    happinessContainer.style = `width:${happiness}%`
    hunger = hunger -2.5;
    hungerContainer.style = `width:${hunger}%`
    cleanliness = cleanliness -3.75;
    cleanlinessContainer.style = `width:${cleanliness}%`
}

function gameOver(){
    jakeyStatus.innerHTML = 'You Lost!'
}

function gameWin(){
    jakeyStatus.innerHTML = 'You Won'
}



