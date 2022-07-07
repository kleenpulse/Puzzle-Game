
// import gamerName from '/login.js'

// TODO: show total number of pairs = DONE
// TODO: show remaining cards to pair = DONE
let gamerName = localStorage.getItem('gameName')

// Sort Array randomly
cardArr.sort(() => 0.5 - Math.random())
let loadinTxt = document.querySelector('#txt')
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let resultCount = 0
let winnerCircle = document.querySelector('.gameWon')
let handleGameover = document.querySelector('.gameovercon')
let greetUser = document.querySelector('#sayHello')

// Additional Cool stuff=============
greetUser.classList.add('gamerName')
greetUser.addEventListener('mouseenter', ()=>{
    customMsg('Hey', 500)
})
greetUser.addEventListener('mouseleave', () => {
    customMsg('Bye now', 500)
})
greetUser.addEventListener('click', () => {
    if (gamerName !== null && gamerName !== 'Player') {
        
        customMsg(`Hi ${gamerName}`, 1000)
    }
    else{
        customMsg(`Hey!, You Clicked me`, 1000)
    }
})
// Additional Cool stuff [END]=============


// Say Hello=============
function sayHello() {

    let welcome;
    let date = new Date();
    let helloHour = date.getHours();
    let helloMin = date.getMinutes();
    let helloSec = date.getSeconds();
    if (helloMin < 10) {
        helloMin = "0" + helloMin;
    }
    if (helloSec < 10) {
        helloSec = "0" + helloSec;
    }
    if (helloHour < 12) {
        welcome = "Good Morning";
    } else if (helloHour < 16) {
        welcome = "Good Afternoon";
    } else {
        welcome = "Good Evening";
    }
    if (gamerName == null) {
        gamerName = "Player"
    }
    greetUser.textContent = `${welcome}  ✧${gamerName}✧`
}

sayHello()
// Say Hello=============


function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        const card = document.createElement('img')
        // let img = document.createElement('img')

        card.setAttribute('title', "CARD " + (i + 1))
        card.setAttribute('src', 'images/blank.png')

        card.addEventListener('click', flipCard)

        card.setAttribute('data-id', i)
        gridDisplay.append(card)

    }
}
createBoard()


resultDisplay.textContent = `SCORE: ${resultCount} | PAIRS LEFT: ${cardArr.length / 2} | TOTAL CARDS: ${cardArr.length}`

function checkMatch() {
    const cards = document.querySelectorAll('img')

    const imageOneId = cardsChosenIds[0]
    const imageTwoId = cardsChosenIds[1]
    if (cardsChosen[0] == cardsChosen[1] && cardsChosenIds[0] !== cardsChosenIds[1]) {




        cards[imageOneId].setAttribute('src', 'images/fireworks.gif')
        cards[imageTwoId].setAttribute('src', 'images/fireworks.gif')
        cardMatchedSound()

        setTimeout(() => {
            cards[imageOneId].style.display = 'none'
            cards[imageTwoId].style.display = 'none'

        }, 500);

        cards[imageOneId].removeEventListener('click', flipCard)

        cards[imageTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        customMsg(`${cardsWon.length} down`, 700)



    }
    if (cardsChosen[0] != cardsChosen[1] || cardsChosenIds[0] === cardsChosenIds[1]) {
        cards[imageOneId].setAttribute('src', 'images/blank.png')
        cards[imageTwoId].setAttribute('src', 'images/blank.png')
        clickCardError()
        customMsg("Oops!!", 500)

    }

    resultCount = cardsWon.length
    resultDisplay.textContent = `SCORE: ${resultCount} | PAIRS LEFT: ${(cardArr.length / 2) - cardsWon.length} | TOTAL CARDS: ${cardArr.length}`


    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArr.length / 2) {
        resultDisplay.textContent = 'Running anti-cheat.....'
        setTimeout(() => {
            resultDisplay.textContent = "Game completed, You've match them all"
        }, 1500);

        setTimeout(() => {
            winnerCircle.style.display = 'flex'
            winnerAudio()

        }, 2000);
    }

}
// ======= AUDIOs ========

// =============cardError audio

function cardMatchedSound() {
    let audioMatched = document.createElement('audio')
    audioMatched.setAttribute('src', 'music/cardMatched.mp3')
    audioMatched.play()

}

// =============cardError audio

// =============cardError audio

function clickCardError() {
    let audioError = document.createElement('audio')
    audioError.setAttribute('src', 'music/cardError.wav')

    audioError.play()

}

// =============cardError audio

// =============cardFlip audio

function clickCardAudio() {
    let audioCardFlip = document.createElement('audio')
    audioCardFlip.setAttribute('src', 'music/cardClick.mp3')
    audioCardFlip.play()

}

// =============cardFlip audio

// In-Game Audio
function inGameAudio() {
    var audioIngame = document.createElement('audio')
    audioIngame.setAttribute('src', 'music/liquidTime.mp3')
    audioIngame.setAttribute('id', 'ingameAudio')
    document.documentElement.appendChild(audioIngame)
    audioIngame.play()
    audioIngame.loop = true

}

// =============In-Game audio

// winner Audio
function winnerAudio() {
    let audioWinner = document.createElement('audio')
    audioWinner.setAttribute('src', 'music/Ara.mp3')
    audioWinner.play()
    audioWinner.loop = true

    let audioToStop = document.querySelector('#ingameAudio')
        audioToStop.pause()
}

// =============winner audio

// ======= AUDIOs END========


function flipCard() {
    //listens for image click and
    // Starts the timer
    clickCardAudio()
    callStartTimerFunc()
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArr[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }

}

// ==============LOADING SCREEN==============
// 

const gameCon = document.querySelector('.container')
function loadingScreen() {
    loadinTxt.textContent = 'loading.....'
    setTimeout(() => {
        loadinTxt.textContent = 'TIPS*: Click each image & try to memorise its position before solving the puzzle :)'

    }, 1500);
    setTimeout(() => {
        loadinTxt.textContent = 'loading GAME.....'
    }, 8000);
    const loaderCon = document.querySelector('.loader-con')

    setTimeout(() => {
        loaderCon.classList.add('noloader')
        gameCon.style.display = 'block'
    }, 10500);
}

// Enable or Disable Loading screen
loadingScreen()

let contentCon = document.querySelector('.content')
function customMsg(msg, time) {
   
    var styler = document.createElement("div")
    styler.setAttribute('class', 'customCon')
    styler.innerHTML = `<h1 id="customtext" > ${msg} </h1> `
    setTimeout(function () {
        styler.parentNode.removeChild(styler)
    }, time)
    contentCon.appendChild(styler)
}

// Timer Function
// Run only once per page reload
var callStartTimerFunc = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            const five = 60 * 3

            const display = document.querySelector('#time');
            startTimer(five, display);
            randomBackgroun()
            inGameAudio()

        }
    };
})();

let blurBtn = document.querySelector('.blurbtn')
blurBtn.addEventListener('click', blurContainer)

const bodyEl = document.querySelector('body')
function blurContainer() {
    bodyEl.classList.toggle('blurContainer')
    if (blurBtn.innerHTML === 'Blur Background') {
        blurBtn.innerHTML = 'Unblur Background'
    } else {
        blurBtn.innerHTML = 'Blur Background'
    }

}
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;

    display.textContent = `TIME: 03:00`;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `TIME: ${minutes}:${seconds} `;
        if (timer <= 60) {
            display.classList.add('warning')
            // alert(timer)
        }

        if (--timer < 0) {
            display.textContent = '00:00';
            callGameover()
            // document.write("GAME OVER ")

        }
    }, 1000);

}


// cooler backgrounds but makes page unresponsive
backgrounds.sort(() => 0.5 - Math.random())

function randomBackgroun() {
    window.clearTimeout()
    const root = document.querySelector('html')
    let index = 0


    for (let i = 0; i < backgrounds.length; i++) {
        setTimeout(() => {
            root.style.background = `rgba(0,0,0,.3) url('${backgrounds[index]}')`
            root.style.backgroundSize = "cover";
            if ((index + 1) === backgrounds.length) {
                setTimeout(() => {
                    randomBackgroun()
                }, 10000)
            } else {
                index++
            }
        }, 7000 * i);
    }

}


function callGameover() {
    handleGameover.style.display = 'flex';
    gameCon.style.display = 'none'
    bodyEl.style.overflow = 'hidden'
    handleGameover.style.overflow = 'hidden'

}


