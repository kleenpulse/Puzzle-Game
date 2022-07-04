

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

let backgrounds = [
    'images/bg1.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg',
    'images/bg6.jpg',
    'images/bg2.jpg'
]

function imagesCreate() {
    for (let i = 0; i < cardArr.length; i++) {
        
        let imdCard = document.createElement('img')
        
        imdCard.setAttribute('src', cardArr[i].img)
        
        
    }
    for (let i = 0; i < backgrounds.length; i++) {

        let bgimage = document.createElement('img')

        bgimage.setAttribute('src', backgrounds[i])
console.log(bgimage)

    }
    
    

}
imagesCreate()