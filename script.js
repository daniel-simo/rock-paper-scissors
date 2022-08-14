const choices = ['rock', 'paper', 'scissors'];

function game(){
    for(let i = 0; i <= 4; i++){
        playRound();
    }

}

function playRound(){
    const playerSelcetion = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelcetion,computerSelection);
    
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
    console.log(choiceP,choiceC)
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
    game()