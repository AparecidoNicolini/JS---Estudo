// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
}

document.querySelector('#clique').addEventListener('click', clicou);