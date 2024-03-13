let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".previous")
let artContainer = document.querySelector(".art-piece-ctnr")
 

let dreamOfSpring = document.querySelector(".dream-of-spring")
let nearTheEnd = document.querySelector(".near-the-end")
let grapeHarvest = document.querySelector(".grape-harvest")
let thePsyche = document.querySelector(".the-psyche")
let angelOfAnnun = document.querySelector(".angel-of-annun")

let imgs = [dreamOfSpring, nearTheEnd, grapeHarvest, thePsyche, angelOfAnnun]
let randomImg = imgs[Math.floor(Math.random() * imgs.length)]

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', previous)



// displays a random art piece
function next() {
    randomImg.style.display = 'none'
    // randomIndex updates every time the next button is clicked
    let randomIndex = Math.floor(Math.random() * imgs.length)
    randomImg = imgs[randomIndex]
    randomImg.style.display = 'block'

    // stores the randomly appeared images in a list
    let nextBtnImgs = []

    // convert randomImg to a number, push the actual number to the nextBtnImgs array
    nextBtnImgs.push(randomImg[randomIndex]) 
    
    
}

function previous() {
    // set the most recent image to be the last image shown from the next() function
    randomImg.style.display = 'none'
    // show the images in reverse order
    // let mostRecentImg = randomImg[imgs.length - 1]

    // store the images shows when the next button is clicked in an array

    // reverse that array
    // display that array's contents when the previous() function is called

}
