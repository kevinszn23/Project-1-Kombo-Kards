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
console.log(shuffledCards)

cards.forEach(card => {card.remove()}) 
shuffledCards.forEach(card => {
    section.appendChild(card)
})

}

startButton.addEventListener("click", shuffle)

    let flipped = false; //starts out with all cards unflipped
    let firstCard, secondCard;

function flipCard() {
    this.classList.add("cards", "flip")
    // ("class", "cards flip")

    if (!flipped) { //first click
        flipped = true
        firstCard = this //this = our card
        // console.log(flipped, firstCard)
    } else {
        flipped = false; //second card
        secondCard = this
        // console.log(firstCard, secondCard)
        //works to check if its card 1 or card 2
        // console.log(firstCard.dataset.match)
        // console.log(secondCard.dataset.match)

        if (firstCard.dataset.match === secondCard.dataset.match) {
            firstCard.removeEventListener("click", flipCard)
            secondCard.removeEventListener("click", flipCard)
            console.log("It's a match!")
            matches++
            htmlmatches.innerHTML = `Matches: ${matches}`

            if (matches === 6) {
                winner.innerHTML = "You win!"
            }

// add id to imgs instead
//push into open array
            // correctMatch.push(firstCard)
            // correctMatch.push(secondCard)
            
            //if match - remove event listener so they cannot be clicked again
            // console.log("removing event listener works")
            //what if not a match?
        } else {
            setTimeout(() => {
                console.log("Not a match!")
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")

            }, 1000)
        }
    }
}

 //citation: https://stackoverflow.com/questions/64852567/html-memory-game-check-if-two-pictures-matched-function

cards.forEach(cards => cards.addEventListener("click", flipCard))

//reset button


function resetGame() {
    //node list, have to iterate over each element
    let charles = document.getElementsByClassName("cards")

    for (let i = 0; i < charles.length; i++) {
        if (charles[i].classList.length > 1) {
            charles[i].classList.remove("flip")
        }
    }
    // charles.forEach(card => {
    //     card.classList.remove("flip")
    // })
    console.log(shuffledCards)
    matches = 0
    htmlmatches.innerHTML = `Matches: ${matches}`
    shuffle(shuffledCards)
    // shuffledCards.forEach(card => {
    //     flipCard()
    // })
    // if (flipped = true) 
    console.log("it clicks")
}


reset.addEventListener("click", resetGame)








