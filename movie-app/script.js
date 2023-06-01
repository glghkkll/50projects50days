// api.themoviedb.org
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b5baa1b4c1ac18dc2c41f2d1aafc8641&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b5baa1b4c1ac18dc2c41f2d1aafc8641&query='

// https://imdb-api.com/ 
const TOP250Movies_API = 'https://imdb-api.com/en/API/Top250Movies/k_1vb64up2'
const MostPopularMovies_API = 'https://imdb-api.com/en/API/MostPopularMovies/k_1vb64up2'
const SEARCH_API = 'https://imdb-api.com/en/API/SearchTitle/k_1vb64up2/'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')
const btns = document.querySelectorAll('.btn')

btns[0].addEventListener('click', () => {
    getMovies(TOP250Movies_API)
})
btns[1].addEventListener('click', () => {
    getMovies(MostPopularMovies_API)
})

getMovies(TOP250Movies_API)
async function getMovies(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        if (data.items !== undefined) {
            showMovies(data.items.slice(0, 8));
        } else {
            showMovies(data.results)
        }
        
    } catch (error) {
        console.log(error);
        showMsg(`
            error 请联系我glghkkll@163.com
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
    // setTimeout(() => {
    //     document.body.removeChild(msgEl)
    // }, 5000)
}
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        // const { title, poster_path, vote_average, overview } = movie
        const {crew, image, fullTitle, imDbRating} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        // movieEl.innerHTML = `
        // <img src="${IMG_PATH + poster_path}" alt="${title}">
        // <div class="movie-info">
        //   <h3>${title}</h3>
        //   <span class="${getClassByVote(vote_average)}">${vote_average.toFixed(1)}</span>
        // </div>
        // <div class="overview">
        //   <h3>overview</h3>
        //   ${overview}
        // </div>
        // `
        movieEl.innerHTML = `
        <img src="${image}" alt="${fullTitle}">
        <div class="movie-info">
          <h3>${fullTitle ? fullTitle : movie.title}</h3>
          <span class="${getClassByVote(imDbRating)}">${imDbRating==''||imDbRating==undefined ? 'no data' : imDbRating}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${crew ? crew : movie.description}
        </div>
        `
        main.appendChild(movieEl)
    });
}

function getClassByVote(vote) {
    if (vote == '' || vote === undefined) {
        return 'steelblue'
    } else if (vote > 8) {
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