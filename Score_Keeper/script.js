let p1Button = document.getElementById("p1")
let p2Button = document.getElementById("p2")
let resetButton = document.getElementById("reset")
let span1 = document.getElementById("s1")
let span2 = document.getElementById("s2")
let numInput = document.querySelector("input")
let winningScoreDisplay = document.querySelector("p span")

let p1Score = 0
let p2Score = 0
let gameOver = false
let winnerScore = 5

p1Button.addEventListener('click', function() {
    if(!gameOver) {
        p1Score++;
    if(p1Score === winnerScore) {
        span1.classList.add("winner")
        gameOver = true
    }
        span1.textContent = p1Score;
    }
    
})

p2Button.addEventListener('click', function() {
    if(!gameOver) {
        p2Score++;
    if(p2Score === winnerScore) {
        gameOver = true
        span2.classList.add("winner")
     }
        span2.textContent = p2Score;
    }

   
})

resetButton.addEventListener("click", function() {
    reSet()
})

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value
    winnerScore = Number(numInput.value)
    reSet()
})


function reSet() {
    p1Score = 0;
    p2Score = 0;
    span1.textContent = 0;
    span2.textContent = 0;
    span1.classList.remove("winner")
    span2.classList.remove("winner")
    gameOver = false;
}