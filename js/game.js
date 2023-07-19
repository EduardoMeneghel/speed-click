
    function generateEnemy() {
        if (!document.getElementById("enemy")) {
            enemy = new Enemy();
            enemy.setPosition();
        }
    }

    function punch() {
        if (enemy.enemyLive) {
            enemy.punch();
        }
    }

    document.querySelector("#backgroud").addEventListener('click', function () {

        let life = document.getElementById("life");
        let currentLife = parseInt(life.innerHTML.split(":")[1].trim());
        let newLife;

        if (currentLife > 0) {
            newLife = currentLife - 10;
            let newWidth = parseInt(life.style.width) - 20;
            life.innerHTML = "LIFE: " + newLife;
            life.style.width = newWidth + "px";
        }

        if (newLife <= 0 || newLife == undefined) {
            console.log("you dead!");
        }
    });

    document.querySelector("#enemy").addEventListener('click', function () {
        punch();
    });

    generateEnemy();
