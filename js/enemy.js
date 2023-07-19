class Enemy {
    constructor() {
        this.enemyLive = generateEnemyLife();
        this.element = document.createElement("p");
        this.element.setAttribute("id", "enemy");
        this.element.style.backgroundColor = cores[this.enemyLive];
        this.element.innerHTML = cores[this.enemyLive];
        this.element.classList = cores[this.enemyLive];
        document.body.appendChild(this.element);
    }

    punch() {
        this.enemyLive--;
        if (this.enemyLive === 0) {
            document.getElementById("enemy").remove();
        }
    }

    setPosition() {
        let larguraTela = window.innerWidth;
        let alturaTela = window.innerHeight;

        let x = Math.floor(Math.random() * larguraTela) / 2;
        let y = Math.floor(Math.random() * alturaTela) / 2;

        let horizontal = Math.random() < 0.5 ? "left" : "right";
        let vertical = Math.random() < 0.5 ? "top" : "bottom";

        this.element.style.left = horizontal === "left" ? x + "px" : "auto";
        this.element.style.right = horizontal === "right" ? x + "px" : "auto";
        this.element.style.top = vertical === "top" ? y + "px" : "auto";
        this.element.style.bottom = vertical === "bottom" ? y + "px" : "auto";
    }
}