let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".sign");
const msg=document.querySelector("#msg");
const msgdiv=document.querySelector(".msg-div");
const userScorecounter=document.querySelector("#user-score");
const compScorecounter=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIdx =Math.floor(Math.random()*3);
    return options[randomIdx];
}

const draw=()=>{
    msg.innerText="Game Draw!";
    msgdiv.style.backgroundColor="rgb(63, 63, 223)";
}

const showWinner=(userWin)=>{
    if(userWin){  
        msg.innerText="You Won!";
        msgdiv.style.backgroundColor="green";
        userScore++;
        userScorecounter.innerText=userScore;
    }else{
        msg.innerText="You lost!";
        compScore++;
        compScorecounter.innerText=compScore;
        msgdiv.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        draw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false : true;
        } else{
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})