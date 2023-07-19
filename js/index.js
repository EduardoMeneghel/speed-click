const cores = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "cyan", "magenta", "teal", "lime", "silver", "gold", "indigo", "maroon", "navy"];
let enemy;
let enemyLive;

generateEnemy();

function generateEnemy() {
    if (!enemy) {
        enemyLive = generateEnemyLife();
        enemy = document.createElement("p");
        enemy.setAttribute("id", "enemy");
        let parentElement = document.body;
        parentElement.appendChild(enemy);
        enemy.style.backgroundColor = cores[enemyLive];
        enemy.innerHTML = cores[enemyLive];
        enemy.classList = cores[enemyLive];
        position = generatePositionRandom(enemy)
        setPosition(enemy, position);
    }
}

function setPosition(enemy, position) {
    enemy.style.left = position.horizontal === "left" ? position.x + "px" : "auto";
    enemy.style.right = position.horizontal === "right" ? position.x + "px" : "auto";
    enemy.style.top = position.vertical === "top" ? position.y + "px" : "auto";
    enemy.style.bottom = position.vertical === "bottom" ? position.y + "px" : "auto";
}

function generateEnemyLife() {
    return Math.floor(Math.random() * 17) + 1;
}

function wasKilled(enemy) {
    if (enemy === 0) {
        console.log("He died");
        document.getElementById("enemy").remove();
        return true;
    }
    return false;
}

function punch() {

    if (enemyLive > 0) {
        let newLife = enemyLive - 1;
        enemyLive = newLife;
        enemy.style.backgroundColor = cores[newLife];
        enemy.innerHTML = cores[newLife];
        enemy.classList = cores[newLife];
        wasKilled(enemyLive);
    } else {
        console.log("There is no enemy")
    }
}

if (document.getElementById("enemy")) {
    document.querySelector("#enemy").addEventListener('click', function () {
        let life = document.getElementById("life");
        let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
        if(currentLife > 0) {
            punch();
            let position = generatePositionRandom(enemy);
            setPosition(enemy, position)
        } else {
            console.log("you dead!");
        }
    });
}

document.querySelector("#backgroud").addEventListener('click', function () {

    let life = document.getElementById("life");
    let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
    let newLife;
    if(currentLife || currentLife > 0) {
        if (currentLife > 0) {
            newLife = currentLife - 10;
            let newWidth = parseInt(life.style.width) - 20;
            life.innerHTML = "LIFE: " + newLife;
            life.style.width = newWidth + "px";
        }

        if (newLife <= 0 || newLife == undefined) {
            console.log("you dead!");
        }
    }
})

function generatePositionRandom(enemy) {
    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;

    let x = Math.floor(Math.random() * larguraTela) / 2;
    let y = Math.floor(Math.random() * alturaTela) / 2;

    let horizontal = Math.random() < 0.5 ? "left" : "right";
    let vertical = Math.random() < 0.5 ? "top" : "bottom";

    return { x, y, horizontal, vertical };
}