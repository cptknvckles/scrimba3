const countdownDisplay = document.getElementById("countdown-display")
let rocket = document.getElementById("rocket")
let boom = document.getElementById('boom')
const launchEl = document.getElementById('launch')
let timeRemaining = 5 
let fail = Math.random() * 100

function launchIt(){
    launchEl.addEventListener('click', ()=>{
        if(fail < 60){
            let countDown = setInterval(()=>{
                timeRemaining--
                launchEl.innerHTML = `00:0${timeRemaining}`
                if(timeRemaining == 0){
                    // launchEl.innerHTML = 'Blast Off!'
                    clearInterval(countDown)
                    rocket.classList.add('rocketLaunch')
                    countdownDisplay.classList.add('countdown-display')
                    countdownDisplay.style.opacity = 1
                    countdownDisplay.innerHTML = ' 🎉 Blast Off! 🎉'
                    launchEl.innerHTML = 'Launch Again?'
                    launchEl.addEventListener('click', () =>{
                        window.location.reload()
                    })
                }
               
                
            },1000)
            
        }
        else{
            boom.classList.add('boom')
            rocket.style.opacity = 0
            boom.style.opacity = 1
            countdownDisplay.style.opacity = 1
            countdownDisplay.innerHTML = 'Launch Failed'
            launchEl.innerHTML = 'Try Again!'
            launchEl.addEventListener('click', () =>{
                window.location.reload()
            })
            
        }
        
    })
}

launchIt()






