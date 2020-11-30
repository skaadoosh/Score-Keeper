const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button'),
}
const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button'),
}

const winScoreSelect = document.querySelector('#winScoreSelect')
const resetButton = document.querySelector('#reset')

let winScore = 3

const updateScores = function (player, opponent) {
    if (player.score === winScore - 1) {
        player.button.disabled = true
        opponent.button.disabled = true
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-warning')
    }
    player.score += 1
    player.display.textContent = player.score
}

const reset = () => {
    for (p of [p1, p2]) {
        p.score = 0
        p.button.disabled = false
        p.display.textContent = p1.score
        p.display.classList.remove('has-text-warning', 'has-text-success')
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    reset()
    winScore = this.value
})