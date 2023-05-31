const projects = [
    {
        number: 1,
        name: "扩展卡片",
        imgLink: "1.png",
    },
    {
        number: 2,
        name: "粘性导航",
        imgLink: "2.png",
    }, {
        number: 3,
        name: "进度条",
        imgLink: "3.png",
    }, {
        number: 4,
        name: "模糊加载",
        imgLink: "4.png",
    }, {
        number: 5,
        name: "搜索框",
        imgLink: "5.png",
    }, {
        number: 6,
        name: "滚动载入",
        imgLink: "6.png",
    }, {
        number: 7,
        name: "表单跳动输入",
        imgLink: "7.png",
    }, {
        number: 8,
        name: "fetch获取笑话",
        imgLink: "8.png",
    }, {
        number: 9,
        name: "动画导航",
        imgLink: "9.png",
    },
]

const projectsEl = document.querySelector('#projects')

projects.forEach(project => {
    const { number, name, imgLink } = project
    const projectEl = document.createElement('div')

    projectEl.innerHTML = `
        <span class="day">Day ${number}</span>
        <img src="https://glghkkll.github.io/50projects50days/img/${imgLink}" alt="${name}">
        <div class="content">
            <h4>${name}</h4>
            <a href="https://glghkkll.github.io/50projects50days/${name}" class="btn">Live Demo</a>
        </div>
    `
    projectsEl.appendChild(projectEl)

})