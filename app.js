class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    getName() {
        return this.name;
    }

    increaseScore() {
        this.score++;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}

class Match {
    constructor(player1, player2, winningScore = 21, pointDifference = 2) {
        this.player1 = player1;
        this.player2 = player2;
        this.winningScore = winningScore;
        this.pointDifference = pointDifference;
    }

    pointToPlayer(playerNumber) {
        if (playerNumber === 1) {
            this.player1.increaseScore();
        } else if (playerNumber === 2) {
            this.player2.increaseScore();
        }
        this.displayScore();
        this.checkWinner();
    }

    checkWinner() {
        const scoreDiff = Math.abs(this.player1.getScore() - this.player2.getScore());
        if ((this.player1.getScore() >= this.winningScore && scoreDiff >= this.pointDifference) ||
            (this.player2.getScore() >= this.winningScore && scoreDiff >= this.pointDifference)) {
            this.announceWinner();
        }
    }

    displayScore() {
        document.getElementById('player1Score').innerText = this.player1.getScore();
        document.getElementById('player2Score').innerText = this.player2.getScore();
    }

    announceWinner() {
        if (this.player1.getScore() > this.player2.getScore()) {
            // alert(`${this.player1.getName()} wins the match!`);
            document.querySelector("h1").innerText = `${player1Name} wins!`;
            this.player1.resetScore();
            this.player2.resetScore();

        } else {
            // alert(`${this.player2.getName()} wins the match!`);
            document.querySelector("h1").innerText = `${player2Name} wins!`;
            this.player1.resetScore();
            this.player2.resetScore();
        }
    }

    resetMatch() {
        this.player1.resetScore();
        this.player2.resetScore();
        this.displayScore();
    }
}

// Initialize game
let player1Name = '';
let player2Name = '';

document.getElementById('player1Name').addEventListener('input', function () {
    player1Name = this.value;
    document.getElementById('player1DisplayName').innerText = player1Name || 'Player 1';
});

document.getElementById('player2Name').addEventListener('input', function () {
    player2Name = this.value;
    document.getElementById('player2DisplayName').innerText = player2Name || 'Player 2';
});

let player1 = new Player('Player 1');

let player2 = new Player('Player 2');

let match = new Match(player1, player2);


document.getElementById('reset').addEventListener('click', () => {
    match.resetMatch();
});
