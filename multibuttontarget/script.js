let btns = document.querySelectorAll(".btn"); 

btns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        let first = event.target;
        console.log(first.innerText + " clicked");
        btn.setAttribute("disabled", true);
        btn.classList.add('btn-clicked');
        btn.classList.remove('btn');
        event.target.innerText = "clicked";
    })
})