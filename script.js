const levelConfig = {
    easy: {
        pairs: 6,
        gridClass: 'easy',
        timeLimit: 250,
        description: 'Find 6 pairs within 250 seconds'
    },
    medium: {
        pairs: 8,
        gridClass: 'medium',
        timeLimit: 200,
        description: 'Find 8 pairs within 200 seconds'
    },
    hard: {
        pairs: 12,
        gridClass: 'hard',
        timeLimit: 150,
        description: 'Find 12 pairs within 150 seconds'
    },
    expert: {
        pairs: 15,
        gridClass: 'expert',
        timeLimit: 160,
        description: 'Find 15 pairs within 160 seconds'
    }
};

const emojis = ['🎨', '🎮', '🎲', '🎸', '🎪', '🎭', '🎼', '🎧', '🎤', '🎯', '🎨', '🎪', '🎭', '🎪', '🎨'];
let currentLevel = 'easy';
let moves = 0;
let timeElapsed = 0;
let timer = null;
let flippedCards = [];
let matchedPairs = 0;
let gameActive = false;

function startGame() {
    if (gameActive) return;
    
    const overlay = document.getElementById('countdownOverlay');
    const countdown = document.getElementById('countdown');
    let count = 3;
    
    overlay.style.display = 'flex';
    
    const countdownTimer = setInterval(() => {
        count--;
        countdown.textContent = count;
        
        if (count === 0) {
            clearInterval(countdownTimer);
            setTimeout(() => {
                overlay.style.display = 'none';
                document.getElementById('gameContainer').classList.add('active');
                gameActive = true;
                startTimer();
            }, 1000);
        }
    }, 1000);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(emoji, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    
    card.innerHTML = `
        <div class="back">?</div>
        <div class="front">${emoji}</div>
    `;
    
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (!gameActive) return;
    if (flippedCards.length >= 2) return;
    if (this.classList.contains('flip')) return;
    if (this.classList.contains('matched')) return;

    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.querySelector('.front').textContent === 
                 card2.querySelector('.front').textContent;

    if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === levelConfig[currentLevel].pairs) {
            setTimeout(() => {
                clearInterval(timer);
                gameActive = false;
                const message = `Congratulations! You completed ${currentLevel} level in ${moves} moves and ${timeElapsed} seconds!`;
                alert(message);
                if (currentLevel !== 'expert') {
                    const nextLevel = getNextLevel();
                    if (confirm(`Would you like to try ${nextLevel} level?`)) {
                        currentLevel = nextLevel;
                        document.getElementById('levelSelector').value = currentLevel;
                        restartGame();
                    }
                }
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
        }, 1000);
    }

    flippedCards = [];
}

function getNextLevel() {
    const levels = Object.keys(levelConfig);
    const currentIndex = levels.indexOf(currentLevel);
    return levels[currentIndex + 1] || currentLevel;
}

function updateTimerBar() {
    const progress = document.getElementById('timerProgress');
    const percentage = ((levelConfig[currentLevel].timeLimit - timeElapsed) / levelConfig[currentLevel].timeLimit) * 100;
    progress.style.width = `${percentage}%`;
    progress.style.backgroundColor = percentage > 20 ? '#4CAF50' : '#f44336';
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById('time').textContent = timeElapsed;
        updateTimerBar();
        
        if (timeElapsed >= levelConfig[currentLevel].timeLimit) {
            clearInterval(timer);
            gameActive = false;
            alert('Time\'s up! Try again!');
            restartGame();
        }
    }, 1000);
}

function changeLevel() {
    currentLevel = document.getElementById('levelSelector').value;
    document.getElementById('currentLevel').textContent = 
        currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
    restartGame();
}

function initializeGame() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    gameContainer.className = `game-container ${levelConfig[currentLevel].gridClass}`;
    
    document.getElementById('levelInfo').textContent = levelConfig[currentLevel].description;
    
    const levelEmojis = emojis.slice(0, levelConfig[currentLevel].pairs);
    const gameEmojis = shuffle([...levelEmojis, ...levelEmojis]);
    
    gameEmojis.forEach((emoji, index) => {
        const card = createCard(emoji, index);
        gameContainer.appendChild(card);
    });

    document.getElementById('timerProgress').style.width = '100%';
}

function restartGame() {
    clearInterval(timer);
    moves = 0;
    timeElapsed = 0;
    matchedPairs = 0;
    flippedCards = [];
    gameActive = false;
    
    document.getElementById('moves').textContent = '0';
    document.getElementById('time').textContent = '0';
    document.getElementById('gameContainer').classList.remove('active');
    
    initializeGame();
}

// Initialize game on load
initializeGame();