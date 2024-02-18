window.addEventListener('load', () => {
    document.querySelectorAll('[data-percent]').forEach(item => {
        item.style.width = `${item.dataset.percent}%`;
    })
})