const correct = [3, 3, 3, 3];
const values = [1, 1, 1, 1];
let locked = false;

function updateColors() {
    for (let i = 0; i < 4; i++) {
        const el = document.getElementById('num' + i);
        el.textContent = values[i];
        el.classList.remove('blue', 'red', 'green');
        if (locked) {
            if (values[i] < correct[i]) {
                el.classList.add('blue');
            } else if (values[i] > correct[i]) {
                el.classList.add('red');
            } else {
                el.classList.add('green');
            }
        }
    }
}

function changeDigit(idx, delta) {
    if (locked) return;
    values[idx] += delta;
    if (values[idx] < 1) values[idx] = 9;
    if (values[idx] > 9) values[idx] = 1;
    updateColors();
}

function lockAnswer() {
    locked = true;
    updateColors();
    document.getElementById('lockBtn').style.display = 'none';
    document.getElementById('tryAgainBtn').style.display = 'block';
}

function tryAgain() {
    locked = false;
    updateColors();
    document.getElementById('lockBtn').style.display = 'block';
    document.getElementById('tryAgainBtn').style.display = 'none';
}

// Initialize colors on load
updateColors();
