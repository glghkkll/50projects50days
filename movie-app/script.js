const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b5baa1b4c1ac18dc2c41f2d1aafc8641&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b5baa1b4c1ac18dc2c41f2d1aafc8641&query='

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')

getMovies(API_URL)
async function getMovies(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()

        showMovies(data.results);
    } catch (error) {
        console.log(error);
        showMsg(`
            发生错误 接口地址在国外,正在迁移国内地址中...
        `)
    }

}

function showMsg(msg, time = 1000) {
    const msgEl = document.createElement('div')
    msgEl.innerHTML = msg
    msgEl.style.cssText = `
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    padding: 7px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 5px;
    `
    document.body.appendChild(msgEl)
    setTimeout(() => {
        document.body.removeChild(msgEl)
    }, 5000)
}
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByVote(vote_average)}">${vote_average.toFixed(1)}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    });
}

function getClassByVote(vote) {
    if (vote > 8) {
        return 'green'
    } else if (vote > 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})