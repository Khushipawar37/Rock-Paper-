let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.innerText = "It's a draw"
    msg.style.backgroundColor = "black";
};
const genCompChoice = () => {
    const options = ["rock", "scissors", "paper"]
    const ranindex = Math.floor(Math.random()*3)
    return options[ranindex];
};

const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin === true) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You win your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#2e8b57";
    }
    else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#dd3e0e";
    }
};

const playGame = (userchoice) => {
    console.log("User choice = ", userchoice)
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
    if(userchoice===compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        } else {
            userWin = compChoice ==="rock" ? false : true; 
        }   
     showWinner(userWin, userchoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame (userchoice);
    })
});

