var options = ["Rock", "Paper", "Scissors"]
var randomNumber

alert("Let's play Rock-Paper=Scissors!!")
var playerChoice = parseInt(prompt("Choice with a number:\n[1] Rock\n[2] Paper\n[3] Scissors"))

function computerChoice(randomNumber) {
    randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

console.log(`You choosed ${playerChoice} vs ${computerChoice()}`)