var scores, roundScore, dice, activePlayer, activeGame;

newGame();

document.querySelector('.btn-roll').addEventListener('click', rollDice);


//Function sets up the next player

function nextPlayer() {

    totalScore = 0;
    activePlayer = (activePlayer === 0) ? 1 : 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.img-dice').style.display = 'none';
}


//Function sets up the new game

function newGame() {

    scores = [0, 0];
    totalScore = 0;
    activePlayer = 0;
    activeGame = true;

    document.querySelector('.img-dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.getElementById('player-id-0').classList.remove('winner-detail');
    document.getElementById('player-id-1').classList.remove('winner-detail');
    document.getElementById('player-id-0').textContent = 'Player 1';
    document.getElementById('player-id-1').textContent = 'Player 2';
    document.getElementById('dice-winner').classList.remove('winner-img');
    document.getElementById('dice-winner').classList.add('img-dice');

    document.querySelector('.player-0-panel').classList.add('active');
};


//Function to roll Dice

function rollDice() {

    if (activeGame) {
        dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.img-dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

        if (dice === 1) {
            setTimeout(function () {
                nextPlayer();
            }, 500);
        } else {
            totalScore += dice;
            document.getElementById('current-' + activePlayer).textContent = totalScore;
        }
    }
}


//Function to Hold the score

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (activeGame) {
        scores[activePlayer] += totalScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] < 100) {
            nextPlayer();
        } else {
            document.getElementById('player-id-' + activePlayer).textContent = 'WINNER !';
            document.getElementById('player-id-' + activePlayer).classList.add('winner-detail');
            document.querySelector('.img-dice').src = 'https://www.funimada.com/assets/images/cards/big/congrats-3.gif';
            document.getElementById('dice-winner').classList.add('winner-img');
            activeGame = false;
        }
    }

});