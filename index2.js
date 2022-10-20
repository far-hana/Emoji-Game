const cards= document.querySelectorAll(".card");

let isFlipped = false;
let firstCard;
let secondCard;

let reset = function() {
     isFlipped = false;
     firstCard = null;
     secondCard = null;
}

let success = function() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

let fail = function() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000)
}

let checkIt = function() {
    if(firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }
}

let flip = function() {
    this.classList.add("flip");
    if(!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }
}

cards.forEach((card) => card.addEventListener("click", flip));

let shuffle = function() {
    cards.forEach((card) => {
        let index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
}

shuffle();