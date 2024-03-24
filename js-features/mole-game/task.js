const currentHits = document.getElementById('dead');
const currentMiss = document.getElementById('lost');
    let counterHit = 0;
    let counterMiss = 0;
const getHole = index => document.getElementById(`hole${index}`);

const resetGame = () => {
    counterHit = 0;
    counterMiss = 0;
    currentHits.textContent = counterHit;
    currentMiss.textContent = counterMiss;
};

for(let holeIndex = 1; holeIndex < 10; holeIndex++){

    let elem = getHole(holeIndex);
    elem.addEventListener('click', () => {
        if(elem.classList.contains('hole_has-mole')){
            counterHit++;
            currentHits.textContent = counterHit;
        } else{
            counterMiss++;
            currentMiss.textContent = counterMiss;
        };

        if(counterHit === 10){
            setTimeout (() =>{
              alert('Win');
              resetGame();   
            }, 0)
        } else if(counterMiss === 5){
            setTimeout (() =>{
                alert('Lose');
                resetGame();      
              }, 0)
        }
    });
    
};