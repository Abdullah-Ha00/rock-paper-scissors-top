function getComputerChoice() {
    choices = "rock, paper, scissors"
random = Math.random() * 10
if (random <5) {
   return answer= choices.slice(0,4)
} else if (random< 7) {
    return nanswer=choices.slice(6,11)
} else {
    return answer = choices.slice(13)
}
}
function getHumanChoice () {
    userChoice = prompt("Rock?Paper?Scissors?")
    return userChoice
}
humanScore = 0
computerScore = 0
