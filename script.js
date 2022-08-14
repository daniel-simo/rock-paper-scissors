const choices = ['rock', 'paper', 'scissors'];

function game(){
    playRound();

}

function playRound(){
    const playerSelcetion = getPlayerChoice();
    const computerSelection = getComputerChoice();
}

function getPlayerChoice () {
   let input = prompt('type rock, paper or scissors');
   while(input == null){
    input = prompt('Type Rock, Paper or Scissors')
   }
   //this makes it so if user presses cancel the code will not break.
   input = input.toLowerCase();
   let check = validateInput(input);
   while (check == false){
   input = prompt('Type Rock, Paper or Scissors, but caps does not matter');
   while(input == null){
    input = prompt('Type Rock, Paper or Scissors')
   };
   //if imput is incorrect gives a loop until the input is correct
   input = input.toLowerCase();
   check = validateInput(input);
   }
   //console.log(input)
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
     //checks if input is correct
}
    game()