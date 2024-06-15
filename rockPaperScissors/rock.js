const hands =['rock','paper','scissors'];

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
        wins: 0
    },
    player69: {
        name: 'Christian',
        getHand: getHand,
        wins: 0
    },
    player3: {
        name: 'Dewy',
        getHand: getHand,
        wins: 0
    },
    player4: {
        name: 'Nick',
        getHand: getHand,
        wins: 0
    }
};

function playRound(player1, player69) {
    let hand1 = player1.getHand();
    let hand69 = player69.getHand();
    
    
    if (hand1 === hand69 ) {
        console.log(player1.name+' played '+hand1+' and '+player69.name+' played '+hand69+' its a tie!')
        
        return null;
    } else if ((hand1 === 'rock' && hand69 === 'scissors') || (hand1 === 'paper' && hand69 === 'rock') || (hand1 === 'scissors' && hand69 === 'paper')) {
        console.log(player1.name+' played '+hand1+' and '+player69.name+' played '+hand69+' '+ player1.name+' wins!')
        
        return player1;
    } else {
        console.log(player1.name+' played '+hand1+' and '+player69.name+' played '+hand69+' '+ player69.name +' wins!')
        
        return player69;
    }

}



function playGame(player1,player69,playUntil) {
    let play1Score = 0;
    let play69Score = 0;
    
    while (play1Score < playUntil && play69Score < playUntil) {
        let winner = playRound(player1,player69);
        if (winner === player1) {
            play1Score++;
        } else if (winner === player69) {
            play69Score++;
        }
    }
    if (play1Score > play69Score) {
        return player1;
    } else if (play69Score > play1Score) {
        return player69;
    }
    
}




const playTournament = (player1,player69,player3,player4,playUntil) => {
    

    game1 = playGame(player1,player69,playUntil);
    game2 = playGame(player3,player4,playUntil);

    final = playGame(game1,game2,playUntil);


    
    return `${final.name} is the world champion!`
}







console.log(playTournament(players.player1,players.player69,players.player3,players.player4, 3));