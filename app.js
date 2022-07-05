const btn  = document.querySelector('.nav-toggle');
const links = document.querySelector('.container');


btn.addEventListener('click', () => {
    links.classList.toggle('show-links');
})


