var getChar = document.querySelectorAll(".char")
var gueesed = document.getElementById("guesss")
var clutter = ""
var random = ["dog", "elephant", "ox", "cat", "cow", "bull", "hen", "fish", "tiger", "peacock", "lion", "cheetah"]
var clickedChar = ""
var lives = 5;
var playerLife = document.getElementById("playerLives")
playerLife.innerHTML = lives
var count = 0

var getRandom = random[Math.floor(Math.random() * random.length)]
console.log(getRandom);

    getChar.forEach(function (dets) {
        dets.addEventListener("click", function () {
            clickedChar = dets.textContent
            var flag = false
            console.log(clickedChar);
            for (i = 0; i < getRandom.length; i++) {
                if (clickedChar == getRandom[i]) {
                    gueesed.childNodes[i].textContent = clickedChar
                    flag = true
                    count++
                    console.log(count);
                    dets.style.backgroundColor = "yellow"
                }
            }

            if (!flag) {
                lives--
                playerLife.innerHTML = lives
                dets.style.backgroundColor = "red"
                console.log(playerLife.innerHTML);
                if (lives == 0) {
                    document.getElementById("play-again").style.display = "flex"
                    document.getElementById("play-again").style.gap = "1rem"
                    document.getElementById("clear_alpha").style.pointerEvents = "none"
                    document.getElementById("YouSee").style.display = "none"
                }
            }

            if (count == getRandom.length) {
                console.log("Hello");
                getRandom = random[Math.floor(Math.random() * random.length)]
                console.log(getRandom);
                count = 0
                clutter = ""
                create()

            }

        })
    })



function create() {
    for (i = 1; i <= getRandom.length; i++) {
        clutter += `<p class="guessed-alphabet"></p>`
    }
    gueesed.innerHTML = clutter
}

create()

document.getElementById("Yes").addEventListener("click", function () {
    getRandom = random[Math.floor(Math.random() * random.length)]
    document.getElementById("clear_alpha").style.pointerEvents = "auto"
    console.log(getRandom);
    count = 0
    lives=5
    playerLife.innerHTML=lives
    clutter = ""
    create()
    document.getElementById("play-again").style.display="none"
    document.getElementById("YouSee").style.display = "block"
})
