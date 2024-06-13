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
        getHand: getHand
    },
    player69: {
        name: 'Christian',
        getHand: getHand
    }
};

function playRound(player1, player69) {
    let hand1 = player1.getHand();
    let hand69 = player69.getHand();

    if (hand1 === hand69 ) {
        console.log('John played '+hand1+' and Christian played '+hand69+' its a tie!')
        return null
    } else if ((hand1 === 'rock' && hand69 === 'scissors') || (hand1 === 'paper' && hand69 === 'rock') || (hand1 === 'scissors' && hand69 === 'paper')) {
        console.log('John played '+hand1+' and Christian played '+hand69+' '+ player1.name+' wins!')
        return player1
    } else {
        console.log('John played '+hand1+' and Christian played '+hand69+' '+ player69.name +' wins!')
        return player69
    }


}

playRound(players.player1,players.player69)