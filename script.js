const btnRoll = document.querySelector("#btn--roll");
const dice = document.querySelector("#dice");
const currentPlayerOne = document.querySelector("#current--0");
const btnHold = document.querySelector("#btn--hold");
const scorePlayerOne = document.querySelector("#score--0");
const nobatPlayer = document.querySelector("#player--1");
const btnNew = document.querySelector("#btn--new")

let currentAction = 0;

let activePlayer = 0;

let currentPlayer = 0;

let switchPlayer = () => {
  activePlayer = activePlayer == 0 ? 1 : 0;

  if (activePlayer == 0) {
    document.querySelector("#player--0").classList.add("player--active");
    document.querySelector("#player--1").classList.remove("player--active");
  } else {
    document.querySelector("#player--1").classList.add("player--active");
    document.querySelector("#player--0").classList.remove("player--active");
  }
};

btnRoll.addEventListener("click", () => {
  dice.classList.remove("hidden");
  let randNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `./images/dice-${randNum}.png`;

  if (randNum !== 1) {
    currentAction += randNum;
    document.querySelector(`#current--${activePlayer}`).textContent = currentAction;
  } else {
    currentAction = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentAction;
    switchPlayer();
  }
});

let score = [0, 0];

btnHold.addEventListener("click", () => {
  if (currentAction > 0) {
    score[activePlayer] += currentAction;

    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] > 20){
      document.querySelector(`#player--${activePlayer}`).classList.add("player--winner")
      dice.classList.add("hidden")
      btnHold.classList.add("hidden")
      btnRoll.classList.add("hidden")
    }
    currentAction = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentAction;
    switchPlayer();
  }
});





btnNew.addEventListener('click', ()=>{
  score = [0,0]
  document.querySelector(`#player--1`).classList.remove("player--winner")
  document.querySelector(`#player--0`).classList.remove("player--winner")
  dice.classList.remove("hidden")
  btnHold.classList.remove("hidden")
  btnRoll.classList.remove("hidden")
  currentAction = 0
  score[activePlayer] = 0
  document.querySelector(`#score--0`).textContent = score[activePlayer]
  document.querySelector(`#score--1`).textContent = score[activePlayer]
  document.querySelector(`#player--0`).classList.add('player--active')
  activePlayer = 0
})