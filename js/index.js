const cores = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "cyan", "magenta", "teal", "lime", "silver", "gold", "indigo", "maroon", "navy"];
let enemy;
let intervalReference;

generateEnemy();
updateHighScore();

setInterval(function () {
    newPosition();
    damage();
}, 10000);

function newPosition() {
    enemyNew = document.getElementById("enemy");
    position = generatePositionRandom(enemyNew);
    setPosition(enemyNew, position);
}

function setPosition(enemy, position) {
    enemy.style.left = position.horizontal === "left" ? position.x + "px" : "auto";
    enemy.style.right = position.horizontal === "right" ? position.x + "px" : "auto";
    enemy.style.top = position.vertical === "top" ? position.y + "px" : "auto";
    enemy.style.bottom = position.vertical === "bottom" ? position.y + "px" : "auto";
}

function damage() {
    let life = document.getElementById("life");
    let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
    let newLife;
    click("red");
    if (currentLife || currentLife > 0) {
        newLife = currentLife - 10;
        let newWidth = parseInt(life.style.width) - 20;
        life.innerHTML = "LIFE: " + newLife;
        life.style.width = newWidth + "px";
    }
}

function click(color) {
    document.addEventListener('click', function (event) {
        let imageSize = 10;
        let x = event.clientX - (imageSize / 2);
        let y = event.clientY - (imageSize / 2);
        let image = document.createElement('img');
        image.classList.add('image');
        image.style.backgroundColor = color;
        image.style.left = x + 'px';
        image.style.top = y + 'px';
        document.body.appendChild(image);
        setTimeout(function () {
            image.remove();
        }, 1000);
    });
};

function setScore() {
    let score = document.getElementById("score");
    let currentScore = parseInt(score.innerHTML.split(":")[1].trim());
    let newScore;
    newScore = currentScore + 10;
    score.innerHTML = "SCORE: " + newScore;
}

function setHighScore() {
    let scoreElement = document.getElementById("score");
    let currentHighScore = parseInt(scoreElement.innerHTML.split(":")[1].trim());
    let highScore = localStorage.getItem("score");

    if (highScore) {
        let highScoreValue = parseInt(highScore);
        if (currentHighScore > highScoreValue) {
            localStorage.setItem("score", currentHighScore);
            updateHighScore();
        }
    } else {
        localStorage.setItem("score", currentHighScore);
        updateHighScore();
    }
}

function updateHighScore() {
    let highScore = localStorage.getItem("score");
    if (highScore) {
        let highScoreValue = parseInt(highScore);
        let newHighScoreElement = document.getElementById("high-score");
        newHighScoreElement.innerHTML = "HIGH SCORE: " + highScoreValue;
    }
}

function generateEnemy() {
    if (!enemy) {
        color = generateRamdomColor();
        enemy = document.createElement("p");
        enemy.setAttribute("id", "enemy");
        let parentElement = document.body;
        parentElement.appendChild(enemy);
        enemy.style.backgroundColor = cores[color];
        enemy.classList = cores[color];
        position = generatePositionRandom(enemy)
        setPosition(enemy, position);
    }
}

function generateRamdomColor() {
    return Math.floor(Math.random() * 17) + 1;
}

function generatePositionRandom(enemy) {
    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;
    let x = Math.floor(Math.random() * larguraTela) / 2;
    let y = Math.floor(Math.random() * alturaTela) / 2;
    let horizontal = Math.random() < 0.5 ? "left" : "right";
    let vertical = Math.random() < 0.5 ? "top" : "bottom";
    return { x, y, horizontal, vertical };
}

if (document.getElementById("enemy")) {
    document.querySelector("#enemy").addEventListener('click', function () {
        click("green");
        let life = document.getElementById("life");
        let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
        if (currentLife > 0) {
            newPosition();
            let position = generatePositionRandom(enemy);
            setPosition(enemy, position);
            setScore();
        } else {
            alert("You are dead!");
            setHighScore();
        }
        clearInterval(intervalReference);
        intervalReference = setInterval(function () {
            newPosition();
            damage();
        }, 2000);
    });
}

document.querySelector("#backgroud").addEventListener('click', function () {
    let life = document.getElementById("life");
    let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
    click("red");
    if (currentLife || currentLife > 0) {
        if (currentLife > 0) {
            damage();
        }
    }
    if (currentLife <= 0 || currentLife == undefined) {
        alert("you are dead!");
        setHighScore();
    }function damage() {
        let life = document.getElementById("life");
        let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
        let newLife;
        click("red");
        if (currentLife || currentLife > 0) {
            newLife = currentLife - 10;
            let newWidth = parseInt(life.style.width) - 20;
            life.innerHTML = "LIFE: " + newLife;
            life.style.width = newWidth + "px";
        }
    }
})