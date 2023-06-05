const projects = [
    {
        number: 1,
        name: "扩展卡片",
        imgLink: "1.png",
        link: 'expanding-cards'
    },
    {
        number: 2,
        name: "粘性导航",
        imgLink: "2.png",
        link: 'sticky-navbar'
    }, {
        number: 3,
        name: "进度条",
        imgLink: "3.png",
        link: 'progress-steps'
    }, {
        number: 4,
        name: "模糊加载",
        imgLink: "4.png",
        link: 'blurry-loading'
    }, {
        number: 5,
        name: "搜索框",
        imgLink: "5.png",
        link: 'hidden-search'
    }, {
        number: 6,
        name: "滚动载入",
        imgLink: "6.png",
        link: 'scroll-animation'
    }, {
        number: 7,
        name: "页面分割",
        imgLink: "7.png",
        link: 'split-landing-page'
    }, {
        number: 8,
        name: "表单跳动输入",
        imgLink: "8.png",
        link: 'form-input-wave'
    }, {
        number: 9,
        name: "fetch获取笑话",
        imgLink: "9.png",
        link: 'dad-jokes'
    }, {
        number: 10,
        name: "动画导航",
        imgLink: "10.png",
        link: 'animated-navigation'
    }, {
        number: 11,
        name: "按钮波纹效果",
        imgLink: "11.png",
        link: 'button-ripple-effect'
    }, {
        number: 12,
        name: "电影信息展示",
        imgLink: "12.png",
        link: 'movie-app'
    }, {
        number: 13,
        name: "背景变换",
        imgLink: "13.png",
        link: 'background-slider'
    },{
        number: 14,
        name: "axios获取GitHub用户",
        imgLink: "14.png",
        link: 'github-profiles'
    },{
        number: 15,
        name: "主题时钟",
        imgLink: "15.png",
        link: 'theme-clock'
    },
]

const projectsEl = document.querySelector('#projects')

projects.forEach(project => {
    const { number, name, imgLink, link } = project
    const projectEl = document.createElement('div')

    projectEl.innerHTML = `
        <span class="day">Day ${number}</span>
        <img src="https://glghkkll.github.io/50projects50days/img/${imgLink}" alt="${name}">
        <div class="content">
            <h4>${name}</h4>
            <a href="https://glghkkll.github.io/50projects50days/${link}" class="btn">Live Demo</a>
        </div>
    `
    projectsEl.appendChild(projectEl)

})