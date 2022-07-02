
document.addEventListener('DOMContentLoaded', () => {

    // TODO: show total number of pairs = DONE
    // TODO: show remaining cards to pair = DONE

    const cardArr = [
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'cookie',
            img: 'images/cookie.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        //I added some additional images
        {
            name: 'apple',
            img: 'images/apple.png',
        },
        {
            name: 'bread',
            img: 'images/bread.png',
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png',
        },
        {
            name: 'coke',
            img: 'images/coke.png',
        },
        {
            name: 'oranges',
            img: 'images/oranges.png',
        },
        {
            name: 'plantain',
            img: 'images/plantain.png',
        },

        // second batch starts here
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'cookie',
            img: 'images/cookie.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        //I added some additional images(2nd batch)
        {
            name: 'apple',
            img: 'images/apple.png',
        },
        {
            name: 'bread',
            img: 'images/bread.png',
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png',
        },
        {
            name: 'coke',
            img: 'images/coke.png',
        },
        {
            name: 'oranges',
            img: 'images/oranges.png',
        },
        {
            name: 'plantain',
            img: 'images/plantain.png',
        },

    ]

    // Sort Array randomly
    cardArr.sort(() => 0.5 - Math.random())
    let loadinTxt = document.querySelector('#txt')
    const gridDisplay = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    const cardsWon = []
    let resultCount = 0
    let handleGameover = document.querySelector('.gameovercon')

    function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('title', "CARD " + (i + 1))
            card.setAttribute('src', 'images/blank.png')
            // card.addEventListener('click', callStartCount)
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

            cards[imageOneId].removeEventListener('click', flipCard)

            cards[imageTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)

            customMsg(`${cardsWon.length} down`, 1000)



        }
        if (cardsChosen[0] != cardsChosen[1] || cardsChosenIds[0] === cardsChosenIds[1]) {
            cards[imageOneId].setAttribute('src', 'images/blank.png')
            cards[imageTwoId].setAttribute('src', 'images/blank.png')
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


        }

    }

    function flipCard() {

        //listens for image click and
        // Starts the timer
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

    function loadingScreen() {
        loadinTxt.textContent = 'loading.....'
        setTimeout(() => {
            loadinTxt.textContent = 'TIPS*: Click each image & try to memorise its position before solving the puzzle :)'

        }, 1500);
        setTimeout(() => {
            loadinTxt.textContent = 'loading GAME.....'
        }, 8000);
        const loaderCon = document.querySelector('.loader-con')
        const gameCon = document.querySelector('.container')

        setTimeout(() => {
            loaderCon.classList.add('noloader')
            gameCon.style.display = 'block'
        }, 10500);
    }

    // Enable or Disable Loading screen
    loadingScreen()


    function customMsg(msg, time) {
        var styler = document.createElement("div")
        styler.classList.add('custom')
        styler.innerHTML = `<h1 h1 id = "customtext" > ${ msg } </h1 > `
        setTimeout(function () {
            styler.parentNode.removeChild(styler)
        }, time)
        document.body.appendChild(styler)
    }


    



    // Timer Function
    // Run only once per page reload
    var callStartTimerFunc = (function () {
        var executed = false;
        return function () {
            if (!executed) {
                executed = true;
                const five = 60 * 5

                const display = document.querySelector('#time');
                startTimer(five, display);
                randomBackground()


            }
        };
    })();

    document.querySelector('.blurbtn').addEventListener('click', blurContainer)
    function blurContainer(){
        const container = document.querySelector('body')
        container.classList.toggle('blurContainer')
    }
    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;

        display.textContent = `TIME: 05:00`;

        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = `TIME: ${ minutes }:${ seconds } `;
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

    function randomBackground() {
        window.clearTimeout()
        const root = document.querySelector('html')
        let index = 0
        let backgrounds = ['images/bg 1.jpg',
            'images/bg 3.jpg',
            'images/bg 4.jpg',
            'images/bg 5.jpg',
            'images/bg 6.jpg',
            'images/bg 2.jpg']

        for (i = 0; i < backgrounds.length; i++) {
            setTimeout(() => {
                root.style.background = `rgba(0,0,0,.3) url('${backgrounds[index]}')`
                root.style.backgroundSize = "cover";
                if ((index + 1) === backgrounds.length) {
                    setTimeout(() => {
                        randomBackground()
                    }, 10000)
                } else {
                    index++
                }
            }, 7000 * i);
        }

    }
    function callGameover(){
        handleGameover.style.display = 'flex';
    }

})
