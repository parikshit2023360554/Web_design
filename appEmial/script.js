let users = [];
let alert = document.getElementById('alert');





function adduser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let user = {
        name: name.value,
        email: email.value
    }

    let userExist = checkuser(email.value);
    if(userExist == false){
        users.push(user)
        alert.classList.add('success');
        alert.innerText = "user added ";
        removeAlert();
    }
    else{
        alert.classList.add('danger');
        alert.innerText = 'email already added';
        removeAlert();
    }
   
    console.log(users);
    renderuser();
}





function removeAlert(){
    setTimeout(()=>{
        alert.classList.remove('success' , 'danger');
        alert.innerText = null; 
    },2000)
    
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




function checkuser(email){
    let user = users.filter((user)=>{
        return user.email == email ; 
    })
    return user.length > 0 ? true : false ; 
}