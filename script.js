const choices = ['rock', 'paper', 'scissors'];
let winners = [];

function game(){
    for(let i = 1; i <= 5; i++){
        playRound();
    }
logWins();
}

function playRound(){
    const playerSelcetion = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelcetion, computerSelection);
    winners.push(winner);
    logRound(playerSelcetion, computerSelection, winner);
}

function getPlayerChoice () {
   let input = prompt('Type Rock, Paper or Scissors');
   while(input == null){
    input = prompt('Type Rock, Paper or Scissors')
   }
   //this makes it so if user presses cancel the code will not break.
   input = input.toLowerCase();
   let check = validateInput(input);
   while (check == false){
   input = prompt(
    'Type Rock, Paper or Scissors, but caps does not matter'
    );
   while(input == null){
    input = prompt('Type Rock, Paper or Scissors')
   };
   //if imput is incorrect gives a loop until the input is correct
   input = input.toLowerCase();
   check = validateInput(input);
   }
   return input;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
     //checks if input is correct
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Its a Tie!';
    } else if(
        (choiceP === 'rock' && choiceC =='scissors') || 
        (choiceP === 'paper' && choiceC =='rock') || 
        (choiceP === 'scissors' && choiceC =='paper') 
        ){
        return 'Player Won';
    } else{
        return 'Computer Won'
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player Wins!').length;
    let computerWins = winners.filter((item) => item == 'Computer Wins!').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:')
    console.log('Player Wins:', playerWins)
    console.log('Computer Wins:', computerWins)
    console.log('Ties:',ties)
}

function logRound (getPlayerChoice, getComputerChoice, winner){
console.log("Player Chose:", getPlayerChoice);
console.log("Computer Chose:", getComputerChoice);
console.log(winner, "Won the Round");
console.log("-------------------------------");
}

game();