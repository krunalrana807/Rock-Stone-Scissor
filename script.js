// make a fist score variable to store a score 

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);  // generate a random number between 0 and 2
    // Math.random() generates a number between 0 and 1, multiplying by 3 gives us a range of 0 to 2.999...
    return option[randIdx];
};

const drawGame = () => {
    // console.log("Game is Draw.");
    msg.innerText = "Game is Draw, Play Again";
     msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {  
    if(userWin) { // if user win is true
        userscore++;
        userScorePara.innerText = userscore;

        console.log("You Win");  
        msg.innerText = `You Win, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        
        // console.log("You Lose");
         msg.innerText = `You Lost, ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

const playGames = (userChoice) => {
    console.log("user choice = ", userChoice);  // userchice print
    // generate computer choice
    const compChoice = gencompChoice();
    console.log("comp choice = ", compChoice); // computer choice print


    if (userChoice === compChoice) {
    // It's a draw if both chose the same thing
    drawGame();
} else {
    // Assume user wins unless proven otherwise
    let userWin = true;  // assume to user is win

    if (userChoice === "rock") {
        // If user chose rock, computer could choose paper or scissors
        // Rock loses to paper → user loses
        // Rock beats scissors → user wins
        userWin = (compChoice === "paper") ? false : true;

    } else if (userChoice === "paper") {
        // If user chose paper, computer could choose rock or scissors
        // Paper loses to scissors → user loses
        // Paper beats rock → user wins
        userWin = (compChoice === "scissor") ? false : true;

    } else {
        // User chose scissors, computer could choose rock or paper
        // Scissors lose to rock → user loses
        // Scissors beat paper → user wins
        userWin = (compChoice === "rock") ? false : true;
    }

    // You would usually then use userWin to either call a function
    // like userWin ? winGame() : loseGame();

    showWinner(userWin, userChoice, compChoice);
}

};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {  // add event click to print in console
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked"); 
        // console.log(userChoice); // print the id of the choice clicked
        // console.log(choice);
        playGames(userChoice);
    });
   
});