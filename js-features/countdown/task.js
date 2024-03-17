let countdown = function(){
    let timer = document.getElementById('timer');
    let currentTime = parseInt(timer.textContent);
    if(currentTime > 0){
        timer.textContent = currentTime - 1;
    } else {
        clearInterval(intervalCountdown);
        alert('Вы победили в конкурсе');
    }
    
}

let intervalCountdown = window.setInterval(countdown, 1000);