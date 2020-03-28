var options = ["Rock", "Paper", "Scissors"]
// var playerChoice, computerChoice

function player() {
    alert("Let's play Rock-Paper-Scissors!")
    var playerChoice = prompt("Choose an option according to a number:\n[1]Rock\n[2]Paper\n[3]Scissors")
    return playerChoice - 1
}

function computer() {
    var computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

function winningLogic() {
    player()
    computer()
}

winningLogic()