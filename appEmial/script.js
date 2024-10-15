let users = [];

function adduser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');


    let user = {
        name: name.value,
        email: email.value
    }

    users.push(user);
    console.log(users);
    renderuser();
}

let uperdiv = document.getElementById('uperdisplay');
function renderuser(){
    uperdiv.innerHTML = "" ;
    users.forEach((user)=>{
        let div = document.createElement('div');
        let name = document.createElement('div');
        let email = document.createElement('div');
        name.innerText = user.name;
        email.innerText = user.email;
        div.classList.add('display');
        name.classList.add('sub-display');
        email.classList.add('sub-display');
        uperdiv.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
    })
}