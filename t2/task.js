const img = document.getElementById('cookie')
const counter = document.getElementById("clicker__counter")
const speed = document.getElementById("speed_of_click")
let pos = false
tm_2 = 1000
img.onclick = () => {
    if ( pos == false) {
        img.width += 20
        img.height += 20
        counter.textContent = Number(counter.textContent) + 1
        pos = true
        let tm_1 = new Date()
        speed.textContent = Math.abs(1000 / (tm_2 - tm_1)).toFixed(2)
      } else {
        img.width -= 20
        img.height -= 20
        counter.textContent = Number(counter.textContent) + 1
        pos = false
        tm_2 = new Date()
        speed.textContent = Math.abs(1000 / (tm_2 - tm_1)).toFixed(2)
    }
}
