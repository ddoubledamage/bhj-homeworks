const currentHits = document.getElementById('dead');
const currentMiss = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);
for(let holeIndex = 1; holeIndex < 10; holeIndex++){
    let counterHit = 0;
    let counterMiss = 0;
    let elem = getHole(holeIndex);
    elem.addEventListener('click', () => {
        if(elem.classList.contains('hole_has-mole')){
            counterHit++;
            currentHits.textContent = counterHit;
        } else{
            counterMiss++;
            currentMiss.textContent = counterMiss;
        }

        if(counterHit === 10){
            setTimeout (() =>{
              alert('Win');   
            }, 0)
            window.location.reload();
        } else if(counterMiss === 5){
            setTimeout (() =>{
                alert('Lose');   
              }, 0)
            window.location.reload();
        }
    })
}