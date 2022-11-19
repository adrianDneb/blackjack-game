let player = {
    name: "You",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    //return randomNumber;
    if (randomNumber === 1) {
        return 11;
    }

    else if (randomNumber > 10) {
        return 10;
    }
    else {
        return randomNumber;
    }

}

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Draw another card?";
    }
    else if (sum === 21) {
        message = "Blackjack!";
        hasBlackjack = true;
    }
    else {
        message = "Out!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}


