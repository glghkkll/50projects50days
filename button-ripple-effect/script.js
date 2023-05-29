const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        console.log(e);
        const x = e.offsetX
        const y = e.offsetY
        console.log(x, y);
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = y + 'px'
        circle.style.left = x + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})