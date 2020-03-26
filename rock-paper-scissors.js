var options = ["Rock", "Paper", "Scissors"]
var randomNumber
var playerChoice

function playerOption(playerChoice) {
    alert("Let's play Rock-Paper-Scissors!!")
    var playerChoice = parseInt(prompt("Choice with a number:\n[1] Rock\n[2] Paper\n[3] Scissors"))
    return options[playerChoice - 1]
}

function computerChoice(randomNumber) {
    randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

console.log(`You choosed ${playerOption()} vs ${computerChoice()}`)