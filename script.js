const text = document.getElementById('text')
const input = document.getElementById('input')
const scoreElement = document.getElementById('score')
const timeElement = document.getElementById('time')
const gameOver = document.getElementById('game_over')

const texts = ['eat','hero','npm','javascript','hello world','nice',"npm cache","vue","hacking world","end","I","all","number","oil","within","now","right","feet","leave","what","now","facebook","came","live","test","about","netflix","came","set","were","follow","study","day","structure","over","why","why","talk","soon","because","random","watch","year","her","any","snapchat","I","both","around","book","line","mother","open","now","defend","mile","go","by","found","said","eye","come","so","place","food","got","city","always","these","any","use","been","was","read","their","without","as","change","leave","can","they","those","eat","never","no","eat","story",]

let randomText
let score = 0
let time = 60

function getRandomText(){
    return texts[Math.floor(Math.random() * texts.length)]
}

function viewDom(){
    randomText = getRandomText()
    text.innerHTML = randomText
}

function scoreAdd(){
    score++
    scoreElement.innerHTML = score
}

function timeRemove(){
    time--
    timeElement.innerHTML = time + 's'

    if(time === 0){
        clearInterval(timeInterval)
        gameEnd()
    }

}

const timeInterval = setInterval(timeRemove, 1000)

function gameEnd(){
    gameOver.innerHTML = `
    <h1>Time is over</h1>
    <h3>Your score: ${score}</h3>
    <button onclick="location.reload()">Restart</button>
    `
    gameOver.style.display = 'flex'
}
viewDom()
input.addEventListener('input', (e)=>{
    const typedText = e.target.value

    if(typedText === randomText){
        scoreAdd()
        viewDom()
        e.target.value = ''
        timeRemove()
    }
})