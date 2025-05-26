
let input = document.querySelector('input');
let btn = document.querySelector('#button');
let takeuser = document.querySelector('#takeuser');
let span = document.querySelector('.name');
let logbtn = document.querySelector('#logout')


btn.addEventListener('click', () => {
    let name = input.value;
    localStorage.setItem('name', name);
    checkuser();
    logbtn.classList.remove('hidden');
})

logbtn.addEventListener('click', () => {
    localStorage.clear();
    takeuser.classList.remove('hidden');
    logbtn.classList.add('hidden');
    span.innerText = '';

})

function checkuser() {
    let userpresent = 'name' in localStorage;
    if (userpresent) {
        takeuser.classList.add('hidden');
        span.innerText = localStorage.getItem('name');
    }
}
checkuser();





