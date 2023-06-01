const URLAPI = 'https://api.github.com/users/'

const form = document.querySelector('#form')
const main = document.querySelector('#main')
const search = document.querySelector('#search')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    if (user) {
        getUser(user)
    }
})

async function getUser(username) {
    try {
        const { data } = await axios(URLAPI + username)

        createCard(data);
        getRepos(username)
    } catch (error) {
        console.log(error);
        if (error.response.status == 404) {
            createErrorCard('没有这个用户');
        }
    }

}
async function getRepos(username) {
    try {
        const { data } = await axios(URLAPI + username + '/repos?sort=created')

        addReposToCard(data);
    } catch (error) {
        console.log(error);
        createErrorCard('获取仓库失败');
    }

}

function createCard(user) {
    const { name, bio, avatar_url, followers, following, public_repos } = user
    main.innerHTML = `
    <div class="card">
        <div>
            <img src="${avatar_url}" alt="${name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>${bio}</p>
            <ul>
                <li>${followers}<strong>Followers</strong></li>
                <li>${following}<strong>Following</strong></li>
                <li>${public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `
}

function addReposToCard(repos) {
    const reposEl = document.querySelector('#repos')
    repos
        .slice(0,5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')

            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        });
}

function createErrorCard(msg) {
    main.innerHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
}