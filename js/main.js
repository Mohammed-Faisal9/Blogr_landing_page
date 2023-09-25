// select item
const listItems = document.querySelectorAll('.list .list-item')

listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.currentTarget.querySelector('.menu').classList.toggle('active');
        
    })
})