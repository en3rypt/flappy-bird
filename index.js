
alert("Start game?");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration", () => {
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + 'px';
    counter++;
});

setInterval(() => {
    var chrTop = parseInt(window.getComputedStyle(chr).getPropertyValue("top"));
    if (jumping == 0 && chrTop < 480) {
        chr.style.top = (chrTop + 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var chrTop = parseInt(window.getComputedStyle(chr).getPropertyValue("top"));

    var cTop = -(500 - chrTop);



    if (chrTop >= 480 || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("Game Over! Score: " + counter);
        chr.style.top = "100px";
        counter = 0;
    }
}, 10);



function jump() {
    jumping = 1;
    var jmpCount = 0;
    var jumpInterval = setInterval(() => {
        var chrTop = parseInt(window.getComputedStyle(chr).getPropertyValue("top"));
        if (chrTop > 6 && jmpCount < 15) {
            chr.style.top = (chrTop - 5) + "px";
        }
        if (jmpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
        }
        jmpCount++;
    }, 7);
}

document.getElementById('game').onclick = function changeContent() {
    jump();
}
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        jump();
    }
}