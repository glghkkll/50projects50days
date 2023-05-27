const jokeEl = document.querySelector('#joke')
const btn = document.querySelector('#jokeBtn')

btn.addEventListener('click', getJoke)

getJoke()

// async function getJoke() {
//     const res = await fetch('https://icanhazdadjoke.com', {
//         headers: {
//             Accept: 'application/json'
//         }
//     })

//     const data = await res.json()

//     jokeEl.innerHTML = data.joke
// }

function getJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => jokeEl.innerHTML = data.joke)
}