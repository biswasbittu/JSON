// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json));

}
const url = 'https://jsonplaceholder.typicode.com/posts'
function loadData3() {
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul=document.getElementById('user-list');
    for(const user of data){
        const li=document.createElement('li');
        // li.innerText=user.body;
        // li.innerText=user.email;
        li.innerHTML=  `
        ${user.title}`
        ul.appendChild(li)

    }

}