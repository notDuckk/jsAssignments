const hands =['rock','paper','scissors'];
const playButton = document.getElementById('playGame')



function getHand() {
    let hand = parseInt(Math.random()*10)%3
    if (hand === 0) {
        return hands[0];
    } else if(hand === 1){
        return hands[1];
    } else if(hand === 2){
        return hands[2];
    };
};

let players = {
    player1: {
        name: 'John',
        getHand: getHand,
        scores: 0
    },
    player69: {
        name: 'Christian',
        getHand: getHand,
        scores: 0
    },
    player3: {
        name: 'Dewy',
        getHand: getHand,
        scores: 0
    },
    player4: {
        name: 'Nick',
        getHand: getHand,
        scores: 0
    }
};

function playRound(player1, player69) {
    let hand1 = player1.getHand();
    let hand69 = player69.getHand();
    let resultText = '';

    
    
    if (hand1 === hand69 ) {
        resultText = `${player1.name} played ${hand1} and ${player69.name} played ${hand69} its a tie!`
        return null;
    } else if ((hand1 === 'rock' && hand69 === 'scissors') || (hand1 === 'paper' && hand69 === 'rock') || (hand1 === 'scissors' && hand69 === 'paper')) {
        resultText = `${player1.name} played ${hand1} and ${player69.name} played ${hand69} ${player1.name} wins!`
        
        return player1;
    } else {
        resultText = `${player1.name} played ${hand1} and ${player69.name} played ${hand69} ${player69.name} wins!`
        
        return player69;
    }

}



function playGame(player1,player69,playUntil) {
    player1.scores=0;
    player69.scores=0;
    
    while (player1.scores < playUntil && player69.scores < playUntil) {
        let winner = playRound(player1,player69);
        if (winner === player1) {
            player1.scores++;
            document.getElementsByClassName('score1')[0].innerText = `${player1.name} Score: `+player1.scores;
            document.getElementsByClassName('score2')[0].innerText = `${player69.name} Score: `+player69.scores;
            document.getElementsByClassName('whoWon')[0].innerText = `${player1.name} Wins!`;
        } else if (winner === player69) {
            player69.scores++;
            document.getElementsByClassName('score1')[0].innerText = `${player1.name} Score: `+player1.scores;
            document.getElementsByClassName('score2')[0].innerText = `${player69.name} Score: `+player69.scores;
            document.getElementsByClassName('whoWon')[0].innerText = `${player69.name} Wins!`;
            
        }
        
    }
    if (player1.scores > player69.scores) {
        return player1;
    } else if (player69.scores > player1.scores) {
        return player69;
    }
    
    
}
console.log(playGame(players.player3,players.player69, 3))

playButton.addEventListener('click', function(){
    playGame(players.player3,players.player69, 3)
})



const playTournament = (player1,player69,player3,player4,playUntil) => {
    

    game1 = playGame(player1,player69,playUntil);

    game2 = playGame(player3,player4,playUntil);

    final = playGame(game1,game2,playUntil);


    return `${final.name} is the world champion!`
}


// const player1score = document.getElementsByClassName('score1');
// let mygameval=playGame(players.player1,players.player69, 3)
// player1score[0].innerText = mygameval.play1Score;
// console.log(mygameval)




// console.log(playTournament(players.player1,players.player69,players.player3,players.player4, 3));