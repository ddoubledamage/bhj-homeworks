let clickCount = 0;
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
cookie.addEventListener('click', () => {
    clickCount++;
    clickerCounter.textContent = clickCount;
    let zoomLevel = parseInt(cookie.getAttribute('width'));
    if(zoomLevel === 200){
        cookie.setAttribute('width', 180);
    } else {
        cookie.setAttribute('width', 200);
    }
});