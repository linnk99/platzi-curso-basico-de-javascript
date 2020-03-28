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
    var computerAction = options[computer()]
    var playerAction = options[player()]

    if (playerAction == computerAction) {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("IT'S A  D R A W !! !!")
    } else if (playerAction == "Rock" && computerAction == "Scissors") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU WON !! !!")
    } else if (playerAction == "Rock" && computerAction == "Paper") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU LOST !! !!")
    } else if (playerAction == "Paper" && computerAction == "Scissors") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU LOST !! !!")
    } else if (playerAction == "Paper" && computerAction == "Rock") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU WON !! !!")
    } else if (playerAction == "Scissors" && computerAction == "Rock") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU LOST !! !!")
    } else if (playerAction == "Scissors" && computerAction == "Paper") {
        console.log(`You picked ${playerAction} vs ${computerAction}`)
        console.log("YOU WON !! !!")
    }
}

winningLogic()