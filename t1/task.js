const p = document.getElementById('timer')
setInterval(()=>{
    if (Number(p.textContent) == 0) {
        let b = confirm("Вы победили в конкурсе!")
        if (b === true) {
            document.location.assign("https://netology.ru/")
        }
    }
    p.textContent = Number(p.textContent) - 1
}, 1000)