const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector("#cactus");
let score = document.querySelector(".score");
let gameover = document.querySelector(".gameover");
const coinElement = document.querySelector("#coinscore")
let interval = 0;
let coinscore = 0;
let store;
let coinValue = 0;
let playerScore = 0;
let square = document.getElementById('cactus');
// let time;
// cactus.addEventListener('animationiteration', duration);

// function duration() {
//     time = Math.random() + 1;
//     cactus.style.setProperty('--animation-time', time + 's');
//     console.log(time);
// }
let scoreCounter = () => {
    playerScore++;
    // if (playerScore % 20 == 0) {
    //     const newDuration = 2 - ((playerScore / 20) * 0.1);
    //     cactus.style.animationDurtion = `${(newDuration)}s`;
    //     console.log(cactus.style.animationDurtion)

    // }
    score.innerHTML = `Score <b> ${ playerScore } </b>                `
}
interval = setInterval(scoreCounter, 200);

function
jump() {
    if (dinosaur.classList != "jump") {
        dinosaur.classList.add("jump");
        setTimeout(function() {
            dinosaur.classList.remove("jump");
        }, 300);
    }
}

function changeBg() {
    const images = [
        "./assets/imgcactus.png ",
        "./assets/imgdinosaur1.png ",
        "./assets/imgdinosaur2.png ",
        "./assets/imgdinosaur3.png ",
    ]
    const bg = images[Math.floor(Math.random() * images.length)];
    // console.log(bg);
    document.getElementById("cactus").style.backgroundImage = `url(${bg})`;
}
var changebhInterval = setInterval(changeBg, 3000);

let isAlive = setInterval(function() {
    // get current dino Y position
    let dinosaurTop = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("top"));
    // console.log(dinosaurTop, "top");
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    // console.log(cactusLeft);
    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinosaurTop >= 140) {
        // collision
        gameover.style.opacity = "1 ";
        clearInterval(interval);
        cactus.style.animation = "none";
        dinosaur.style.animation = "none";
        cactus.style.backgroundImage = "";
        coin.style.animation = "none";
        // cactus.remove()
        // coinscore.style.animation = "block";
        clearInterval(changebhInterval);
        clearInterval(changecoinInterval);
        score.innerHTML = `Score <b>${playerScore}</b>                `
        console.log(playerScore, "+++++++++++++++++++++");
        // alert("Game Over!");
    }
}, 10);

function CoinBg() {
    const images = {
        20: "./assets/20.png",
        50: "./assets/50.png",
        100: "./assets/100.png",
    }
    const array = [20, 50, 100];
    store = array[Math.floor(Math.random() * Object.keys(images).length)]
    const BG = images[`${store}`];
    console.log("---bg---", store);
    document.getElementById("coin").style.backgroundImage = `url(${BG})`;
}
CoinBg();
var changecoinInterval = setInterval(CoinBg, 4000);
console.log("---store---", store);

let isIncrease = setInterval(function() {
            let dinosaurTop = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("top"));
            let coinleft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
            if (coinleft < 84 && coinleft >= 0 && dinosaurTop <= 140) {
                coinValue = store;
                console.log("---cv---", coinscore, store);
                console.log(coinscore, ";;;;")
                coinscore += coinValue;
                coinElement.innerHTML = `Coin<b> ${coinscore} </b>                `

            }
            // console.log(coinscore, ";;;;")
        },
        150)
    // console.log("----isIncrease-----", isIncrease);
document.addEventListener("keydown", function(event) {
    jump();
});