'use strict';

// Selecting elements (buttons,value)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    };

// Rolling the dice: display dice, generate number, update current


//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    //generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`score--${activePlayer}`).textContent = currentScore;

    } else {
        // switch to next player
        switchPlayer();
    }
});

btnHold.addEventListener('click', function(){
    //1.add current score to the acive player's score
    scores[activePlayer] += currentScore; // or scores[1] = scores[1] + currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if player's score is >=100

    //finish the game

    // switch to the next player
    switchPlayer();
});

