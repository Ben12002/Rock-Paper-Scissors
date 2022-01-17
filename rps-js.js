
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const buttons = document.querySelectorAll("button");
const winCounterDiv = document.querySelector(".win-counter");
const lossCounterDiv = document.querySelector(".loss-counter");
let lossCounter = 0;
let winCounter = 0;
let gameEnd = false;

function computerPlay(){
    const OPTIONS = ["rock", "paper", "scissors"];
    return OPTIONS[Math.floor(Math.random()*3)]
}

function playOneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Draw! rock vs rock";
        }
        else if (computerSelection === "paper"){
            lossCounter += 1;
            return "Lose! rock vs paper";
        }
        else if (computerSelection === "scissors"){
            winCounter += 1;
            return "Win! rock vs scissors";
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            winCounter += 1;
            return "Win! paper vs rock";
        }
        else if (computerSelection === "paper"){
            return "Draw! paper vs paper";
        }
        else if (computerSelection === "scissors"){
            lossCounter += 1;

            return "Lose! paper vs scissors";
        }
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            lossCounter += 1;
            return "Lose! scissors vs rock";
        }
        else if (computerSelection === "paper"){
            winCounter += 1;
            return "Win! scissors vs paper";
        }
        else if (computerSelection === "scissors"){
            return "Draw! scissors vs scissors";
        }
    }
    
    else{
        return "INVALID INPUT!";
    }

    
}

function checkGameEnd(){
    
    if (lossCounter === 5){
        alert("You lost!");
        winCounter = 0;
        lossCounter = 0;    
        document.querySelectorAll(".result").forEach((div) => div.remove());

    } else if (winCounter === 5){
        alert("You Won!");
        winCounter = 0;
        lossCounter = 0;    
        document.querySelectorAll(".result").forEach((div) => div.remove());
    }
}

function processButton(e){

    // Add a div displaying result
    const resultDiv = document.createElement('div');
    resultDiv.textContent = playOneRound(e.target.id, computerPlay());
    resultDiv.setAttribute("class","result");
    document.body.appendChild(resultDiv);

    // Announce winner if 5 points
    checkGameEnd();

    // Update win counter and game counter divs
    winCounterDiv.textContent = `Win Counter: ${winCounter}`;
    lossCounterDiv.textContent = `Loss Counter: ${lossCounter}`;

    
    
    
}

buttons.forEach( (btn) =>{
    btn.addEventListener('click', processButton)
});




// function game(){
//     for (let i = 0; i<5; i++){
//         let player = prompt("Your choice? : ");
//         let computer = computerPlay();
//         console.log(PlayOneRound(player, computer));
//     }
// }


