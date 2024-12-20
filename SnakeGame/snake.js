const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

let obstacles = [
    { x: 5 * box, y: 5 * box },
    { x: 15 * box, y: 15 * box },
    { x: 10 * box, y: 10 * box }
];

let score = 0;
let topScore = localStorage.getItem('topScore') || 0;
let d;

document.getElementById('topScore').innerText = topScore;
document.addEventListener('keydown', direction);
document.getElementById('restartButton').addEventListener('click', restartGame);

function direction(event) {
    if (event.keyCode == 37 && d != 'RIGHT') {
        d = 'LEFT';
    } else if (event.keyCode == 38 && d != 'DOWN') {
        d = 'UP';
    } else if (event.keyCode == 39 && d != 'LEFT') {
        d = 'RIGHT';
    } else if (event.keyCode == 40 && d != 'UP') {
        d = 'DOWN';
    }
}

function collision(newHead, array) {
    for (let i = 0; i < array.length; i++) {
        if (newHead.x == array[i].x && newHead.y == array[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? '#00FF00' : '#FFFFFF';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x, food.y, box, box);

    for (let i = 0; i < obstacles.length; i++) {
        ctx.fillStyle = '#FF00FF';
        ctx.fillRect(obstacles[i].x, obstacles[i].y, box, box);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == 'LEFT') snakeX -= box;
    if (d == 'UP') snakeY -= box;
    if (d == 'RIGHT') snakeX += box;
    if (d == 'DOWN') snakeY += box;

    // Make the snake appear on the other side when it reaches the wall
    if (snakeX < 0) snakeX = canvas.width - box;
    if (snakeY < 0) snakeY = canvas.height - box;
    if (snakeX >= canvas.width) snakeX = 0;
    if (snakeY >= canvas.height) snakeY = 0;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        document.getElementById('score').innerText = score;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (collision(newHead, snake) || collision(newHead, obstacles)) {
        clearInterval(game);
        if (score > topScore) {
            topScore = score;
            localStorage.setItem('topScore', topScore);
            document.getElementById('topScore').innerText = topScore;
        }
    }

    snake.unshift(newHead);
}

function restartGame() {
    snake = [{ x: 9 * box, y: 10 * box }];
    score = 0;
    document.getElementById('score').innerText = score;
    d = null;
    clearInterval(game);
    game = setInterval(draw, 100);
}

let game = setInterval(draw, 100);