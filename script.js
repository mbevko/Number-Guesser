//dom variables
let playerGuess = document.querySelector(".player_guess");
let displayComputerGuess = document.querySelector(".computer_guess");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let guess = document.querySelector(".make_guess_button")
let humanScore = document.querySelector(".player_score");
let computerScore = document.querySelector(".computer_score");
let roundNumber = document.querySelector(".round_number");
let determineWinner = document.querySelector(".determine_winner");
let displayTargetNumber = document.querySelector(".target_number");
let nextRound = document.querySelector(".next_round_button");

//score and round tracker variables
let humanRoundWin = 0;
let computerRoundWin = 0;
let getHumanScore = 0;
let getComputerScore = 0;
let round = 1;

computerScore.innerText = `Score: 0`; 
humanScore.innerText = `Score ${humanRoundWin}`;

//Human Guess
let humanGuess = 0;
playerGuess.innerText = humanGuess;
plus.addEventListener('click', () => {
    humanGuess++;
    playerGuess.innerText = humanGuess;
    if(humanGuess == 10){
        plus.setAttribute("disabled", "");
    };
    if(humanGuess  == 1 ){
        minus.removeAttribute("disabled", "");
    }
  });
minus.addEventListener('click', () => {
    if(humanGuess == 1){        
        minus.setAttribute("disabled", "");
    };
    if(humanGuess  <= 10 ){
        plus.removeAttribute("disabled", "");
    };
    humanGuess--;
    playerGuess.innerText = humanGuess;
  }); 



guess.addEventListener('click', () => {

    //Target Number
const generateTarget = () => {
    return Math.floor(Math.random() * 11);
  };
  let targetNum = generateTarget(); 

  // Computer guesses
  const getComputerGuess = () => {
    return Math.floor(Math.random() * 11);
  };
  let computerGuess = getComputerGuess();

    //checking for winner
const compareGuesses = () => {
    
    let human = Math.abs(humanGuess - targetNum);
    let computer = Math.abs(computerGuess - targetNum);
     if(human < computer){
         determineWinner.innerText = "Round Win";
         getHumanScore++
         humanRoundWin++
         humanScore.innerText = `Score: ${humanRoundWin}`;
   } else if(human > computer){
         determineWinner.innerText = "Round Loss";
         getComputerScore++
         computerRoundWin++
         computerScore.innerText = `Score: ${computerRoundWin}`; 
   } else(determineWinner.innerText = "Draw");
 };
    //run function to check for winner
    compareGuesses(); 
    displayTargetNumber.innerText = `Target Number: ${targetNum}`;
    displayComputerGuess.innerText = computerGuess;
    guess.setAttribute("disabled", "");
    nextRound.removeAttribute("disabled", "");
    guess.style.background = "grey";
    nextRound.style.background = "blue";
});

nextRound.addEventListener('click', () => {
    round++
    roundNumber.innerHTML = `Round ${round}`;
    guess.removeAttribute("disabled", "")
    nextRound.setAttribute("disabled", "")
    displayComputerGuess.innerText = "?";
    displayTargetNumber.innerText = `Target Number: ?`;
    determineWinner.innerText = "";
    nextRound.style.background = "grey";
    guess.style.background = "blue";
});
