const holes = document.querySelectorAll('.hole')
let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
function success() {
    if (++dead.textContent === 10) {
      alert('Победа!');
      dead.textContent = 0;
      lost.textContent = 0;
          }
  }
function fail() {
    if (++lost.textContent === 5) {
      alert('Вы проиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    };
  }
Array.from(holes).forEach( hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole') == true) {
            success()
        } else { fail()}
    })
})
