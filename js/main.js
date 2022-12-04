const playerChoiceReader = document.querySelector('#player-picked');
const cpuChoiceReader = document.querySelector('#cpu-picked');
const playerResult = document.querySelector('#player-result');
const cpuResult = document.querySelector('#cpu-result');
const result = document.querySelector('#result');
let btns = document.querySelectorAll('#rock, #paper, #scissors');
const playerInputName = document.querySelector("#player-name-input");
const h2PlayerName = document.querySelector("#player-name");
const submitButton = document.querySelector("#submit-button");
const gameLength = 3;

// När man klickar på ens namn så blir input synlig så att man kan skriva nytt namn
h2PlayerName.addEventListener('click', function(){
    playerInputName.style.display  = "block"
    submitButton.style.display  = "block"
    h2PlayerName.style.display  = "none"
})

// när man klickar enter eller på submit knappen så 
// försvinner dem för att visa namnet i h2 element 
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    console.log(playerInputName.value)
    h2PlayerName.innerHTML = playerInputName.value + " :" 
    playerInputName.style.display  = "none"
    submitButton.style.display  = "none"
    h2PlayerName.style.display  = "block"
})

// loopaar över knapparna och lägger till en event listener
// så att när knapppen trycks så ska ikonen i dens innerHTML
// 
for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(event){
        // får id:n från den knappen som blir ned tryckt
        id = '#' + event.target.id
        // hämtar ikonen av den knappen som blir ned tryckt
        // sätter ikonen i player choice reder element
        playerChoiceReader.innerHTML = document.querySelector(id).innerHTML

        machineDecision(i)
    })
}

// slumpmässig val
function machineDecision(playerChoice) {
    machineChoice = Math.floor(Math.random() * btns.length)
    cpuChoiceReader.innerHTML = btns[machineChoice].innerHTML
    compare(playerChoice, machineChoice)
}

function compare(playerChoice, machineChoice) {
    // Alla sätt spelaren kan vinna
    // index 0 = sten, 1 = papper, 2 = sax
    if(playerChoice == 0 && machineChoice == 2 || 
        playerChoice == 1 && machineChoice == 0 || 
        playerChoice == 2 && machineChoice == 1){
        // Vi över poängen med 1 för spelaren, eftersom den vann rudnan
        playerResult.innerHTML = parseInt(playerResult.innerHTML) + 1;
        result.innerHTML = "Winner";
    }else if(playerChoice == machineChoice){
        // Spelara spelar lika med maskinen
        result.innerHTML = "Draw";
    }else{
        // Vi över poängen med 1 för cpu, 
        // ifall spelaren ej vinner eller spelare lika
        cpuResult.innerHTML = parseInt(cpuResult.innerHTML) + 1;
        result.innerHTML = "Loose";
    }

    
    let playerPoints = parseInt(playerResult.innerHTML)
    let cpuPoints = parseInt(cpuResult.innerHTML)

    // Om poängen är större eller lika med tre
    // avsluta spelet och visa vem vinnaren ör
    if(playerPoints >= 3 || cpuPoints >= 3){
        // kontrollera om spelare har mer poäng än cpu
        if(playerPoints > cpuPoints){
            // spelare har mer poäng än cpu, därför visa dens namns
            result.innerHTML = playerInputName.value + " wins!"
        }else{
            // spelare har inte mer poäng än cpu
            result.innerHTML = "MACHINE wins!"
        } 
        setTimeout(reset, 1000)
    }

}

// const second = 100;
// let time = 2 + second

setTimeout(reset, 500)

function reset(){
        playerResult.innerHTML = 0;
        cpuResult.innerHTML = 0; 

    
}








