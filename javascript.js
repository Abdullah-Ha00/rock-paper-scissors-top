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
let humanScore = 0
let computerScore = 0
function playRound(humanChoice, computerChoice) {
    console.log(`Human chose ${humanChoice}. Computer chose ${computerChoice}.`)
    if (humanChoice.toLowerCase()!= "rock" && humanChoice.toLowerCase()!= "paper" && humanChoice.toLowerCase()!= "scissors") {
        return "Please choose rock, paper, or scissors!"
    }else if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        return "It's a draw!"
        
    }else if (humanChoice.toLowerCase() == "rock" && computerChoice =="scissors"){
        humanScore++
        return "You win!, rock beats scissors!"
    }else if (humanChoice.toLowerCase() == "rock" && computerChoice =="paper"){
        computerScore++
        return "You lose!, paper beats rock!"
      
    }else if (humanChoice.toLowerCase() == "paper" && computerChoice =="rock"){
        humanScore++
        return "You win!, paper beats rock!"
        
    }else if (humanChoice.toLowerCase() == "paper" && computerChoice =="scissors"){
        computerScore++
        return "You lose!, scissors beats paper!"
        
    }else if (humanChoice.toLowerCase() == "scissors" && computerChoice =="paper"){
        humanScore++
        return "You win!, scissors beats paper!"
       
    }else 
       computerScore++
       return "You lose! rock beats scissors!"
        
         
}
let round = 5
while (round >0) {
    let humanSelection =getHumanChoice()
    let computerSelection = getComputerChoice()
    console.log(playRound(humanSelection, computerSelection))
    console.log(humanScore, computerScore)
    round--
} 
if (humanScore > computerScore) {
    console.log("You win! Please play again soon!")
}else if (computerScore> humanScore){
    console.log("You lose! Better luck next time!")
}else {
    console.log("There is no winner! Try again!")
}

    

        


