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

        //now figure out if cards match using data attribute
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
    // shuffle(shuffledCards)
    // shuffledCards.classList.remove("flip")
    // section.setAttribute("class", "cards")
    // this.classList.remove("cards")
    let charles = document.getElementsByClassName("cards")
    charles.classList.remove("cards")
    console.log(shuffledCards)
    matches = 0
    htmlmatches.innerHTML = `Matches: ${matches}`
    // shuffledCards.forEach(card => {
    //     flipCard()
    // })
    // if (flipped = true) 
    console.log("it clicks")
}

//tried - pushing into an empty array
//tried toggle
//tried remove/add
//tried changing flip function
//instead of changing class, adds "flip" to it
//tried putting shuffle function in reset button, didnt work either
//now can click same card as well
//confused on CSS frontside backside

reset.addEventListener("click", resetGame)


//win con
//if all the cards are flipped and match with their data attribute = win
//use empty array above





//mvps
    //functional start screen
    //functional main game screen where all the cards are clickable and flip over properly
    //user can only click same card once
    //set win and lose conditions
    //make sure timer is working properly
    //make sure the appropriate messages pop up when the user matches a pair, wins, or loses


//after mvp
    //styling of cards
    //styling of the board and title


