            let computerScore = 0;
            let playerScore = 0;
    
            function OnlineGame(player){
                let game = ['rock', 'paper', 'scissor'];
                let computerChoice = game[Math.floor(Math.random()*3)];
    
                if(player == computerChoice){
                    print("Tie this game!");
                }
                else if((player == "rock" && computerChoice == "scissor") || 
                        (player == "paper" && computerChoice == "rock") || 
                        (player == "scissor" && computerChoice == "paper"))
                {
                    playerScore++;
                    print( `You Win! You chose ${player} and Computer chose ${computerChoice}.` );
                
                 }
                 else{
                    computerScore++;
                    print(`Computer Win! Computer chose ${computerChoice} and you chose ${player}.`);
                 }
    
                 updateScores();
            }
    
            function resetGame() {
                computerScore = 0;
                playerScore = 0;
                updateScores();
                print("Game reset. Choose your move!");
            }
    
            function updateScores() {
                document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`;
                document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
            }
    
            function print(Result){
                document.getElementById('result').innerHTML = Result;
            }
