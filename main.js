const timer = document.getElementById("timer");
const text = document.getElementById("text");
const buttonRock = document.getElementById("rockButton");
const buttonPaper = document.getElementById("paperButton");
const buttonScissors = document.getElementById("scissorsButton");
const scoreBoard = document.getElementById("scoreBoard");
const replay = document.getElementById("replay");
const winner = document.getElementById("textWinner");

function sleep(miliseconds) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

const score = [0, 0];

//display the countdown
async function showCount() {
  let seconds = 3;
  timer.style.visibility = "visible";
  replay.style.visibility = "hidden";

  while (seconds > 0) {
    timer.innerHTML = seconds;
    await sleep(1000);
    seconds -= 1;
  }
  showButtons();
}

buttons.style.visibility = "hidden";
winner.style.visibility = "hidden";
scoreBoard.style.visibility = "hidden";

//display the buttons
function showButtons() {
  timer.style.visibility = "hidden";
  replay.style.visibility = "hidden";

  text.innerHTML = "Pick one!";
  buttons.style.visibility = "visible";
}

//check button pressed
function buttonPicked() {
  winner.style.visibility = "visible";
  scoreBoard.style.visibility = "visible";
  scoreBoard.innerHTML = score.join(" : ");

  buttonRock.addEventListener("click", () => {
    random = Math.floor((Math.random() * 3) + 1); //generates random number 
    if (random == 1) {
      winner.innerHTML = "Rock vs Rock: Draw!";
    } else if (random == 2) {
      winner.innerHTML = "Rock vs Paper: Paper covers Rock!";
      score[1]++
    } else {
      winner.innerHTML = "Rock vs Scissors: Rock covers Scissors!"
      score[0]++;
    }
  });

  buttonPaper.addEventListener("click", () => {
    random = Math.floor((Math.random() * 3) + 1);
    if (random == 1) {
      winner.innerHTML = "Paper vs Rock: Paper covers Rock!";
      score[0]++;
    } else if (random == 2) {
      winner.innerHTML = "Paper vs Paper: Draw!"
    } else {
      winner.innerHTML = "Paper vs Scissors: Paper covers Scissors!";
      score[1]++;
    }
  });

  buttonScissors.addEventListener("click", () => {
    random = Math.floor((Math.random() * 3) + 1);
    if (random == 1) {
      winner.innerHTML = "Scissors vs Rock: Rock covers Scissors!";
      score[1]++;
    } else if (random == 2) {
      winner.innerHTML = "Scissors vs Paper: Scissors covers Paper!"
    } else {
      score[0]++;
      winner.innerHTML = "Scissors vs Scissors: Draw!";
    }
  });
}

function main() {
  replay.addEventListener("click", () => {
    showCount();
    buttonPicked();

  });
}

main();