

function press(id){
    move(id);
    const thumb = document.getElementById(id);
    const btn = document.getElementById('btn');
    let t = 1;
    
    let timer = setInterval(() => { 
        t += 1;
        console.log(t);
    }, 1000);

    thumb.classList.add('animation');

    btn.addEventListener("mouseup", () => {
        clearInterval(timer);
        let size = t * 100;
        thumb.style.width = size + 'px';
        thumb.classList.remove('animation');
    })

    
}



function move(id){

}


