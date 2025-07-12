const clock=document.getElementById('clock')
setInterval( () =>{
    let date = new date()
    clock.innerText= date.toLocaleTimeString()
}, 1000)