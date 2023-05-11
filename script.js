const panelList = document.querySelectorAll('.panel')

// console.log(panelList);

panelList.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActive()
        panel.classList.add('active')
    })
})

function removeAllActive() {
    panelList.forEach(patel => {
        patel.classList.remove('active')
    })
}