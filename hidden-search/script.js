const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const search = document.querySelector('.search')

btn.addEventListener('click', () => {
    if (search.classList.toggle('active')) {
        btn.innerHTML = ''
        input.focus()
    } else {
        btn.innerHTML = ''
    }
})