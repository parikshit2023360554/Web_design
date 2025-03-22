//----------set-1--------------------------------
function complited(){
    let comp = document.getElementById('cong')
    console.log(comp)
    comp.innerText='Congaratulation 🤩 You Made IT........'
    let but = document.getElementById('but');
    but.style.display='none'
}


// ----------------------set-2-------------------------------
// function complited(){
//     haha = document.getElementById('get_name');
//     console.log(haha.value);//to get he name or values of the text in palceholder we use name.value
//     update = document.getElementById('cong');
//     update.innerText = "Welcome "+haha.value+".....How can I help You?"
//     haha.value = "";
//     but.style.display ='none';

// }






//---------------------set-3------------------
cons = 0 ; 
function increment(){
    cons = cons+1;
    let no = document.getElementById('no');
    no.innerText = cons;
}

function decrement(){
    if(cons>0){
        cons = cons-1;
        let no = document.getElementById('no');
        no.innerText=cons;
    }
}