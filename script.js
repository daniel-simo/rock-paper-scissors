
const choice = ('rock', 'paper', 'scissors')

function getComputerChoice () {
   return choice[Math.floor(Math.random() * choice.length)]
}