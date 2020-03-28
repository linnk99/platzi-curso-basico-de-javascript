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

    switch (playerAction) {
        case "Rock":
            switch (computerAction) {
                case "Rock":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("IT'S A  D R A W !! !!")
                    break
                case "Paper":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU LOST !! !!")
                    break
                case "Scissors":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU WON !! !!")
                    break
            }
            break
    }

    switch (playerAction) {
        case "Paper":
            switch (computerAction) {
                case "Rock":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU WON !! !!")
                    break
                case "Paper":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("IT'S A  D R A W !! !!")
                    break
                case "Scissors":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU LOST !! !!")
                    break
            }
    }

    switch(playerAction) {
        case "Scissors":
            switch(computerAction) {
                case "Rock":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU LOST !! !!")
                    break
                case "Paper":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("YOU WON !! !!")
                    break
                case "Scissors":
                    console.log(`You picked ${playerAction} vs ${computerAction}`)
                    console.log("IT'S A  D R A W !! !!")
                    break
            }
    }
}

winningLogic()