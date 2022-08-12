const cards = document.querySelectorAll(".cards")
const startButton = document.querySelector(".start")
const section = document.querySelector("section")
const reset = document.querySelector(".reset")
const htmlmatches = document.querySelector(".matches")
const winner = document.querySelector(".winner")
let matches = 0;


let shuffledCards = [];
function shuffle(arr) {
    
    for (let i = 0; i < cards.length; i++) {
    shuffledCards.push(cards[i])
} 

shuffledCards.sort( () => .5 - Math.random() );

cards.forEach(card => {card.remove()}) 
shuffledCards.forEach(card => {
    section.appendChild(card)
})
}

startButton.addEventListener("click", shuffle)

    let flipped = false;
    let firstCard, secondCard;

function flipCard() {
    this.classList.add("cards", "flip")

    if (!flipped) {
        flipped = true
        firstCard = this

    } else {
        flipped = false;
        secondCard = this

        if (firstCard.dataset.match === secondCard.dataset.match) {
            firstCard.removeEventListener("click", flipCard)
            secondCard.removeEventListener("click", flipCard)
            console.log("It's a match!")
            matches++
            htmlmatches.innerHTML = `Matches: ${matches}`

            if (matches === 6) {
                winner.innerHTML = "You win!"
            }

        } else {
            setTimeout(() => {
                console.log("Not a match!")
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
            }, 1000)
        }
    }
}

cards.forEach(cards => cards.addEventListener("click", flipCard))


function resetGame() {
    let charles = document.getElementsByClassName("cards")

    for (let i = 0; i < charles.length; i++) {
        if (charles[i].classList.length > 1) {
            charles[i].classList.remove("flip")
        }
    }
    matches = 0
    htmlmatches.innerHTML = `Matches: ${matches}`
    shuffle(shuffledCards)
}

reset.addEventListener("click", resetGame)