function makeBubble() {
    var clutter = "";


    for (var i = 1; i <= 40; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class = "bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 30;
var score = 20;
var hitrn = 0;

function increaseScore() {
    score = score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>geme over <br><button onclick="window.location.reload();">Restart</button><h1> `;
        }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(details){
   var clicknum = Number(details.target.textContent);
   if(clicknum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});


runTimer();
makeBubble();
getNewHit();
increaseScore();