let count = -1;

const title = document.getElementById('question');
const buttonContainer = document.getElementById('button-container');
const statementParagraph = document.getElementById('statement');

let buttons = [
    'eens',
    'neutraal / niet zeker',
    'oneens',
]
if(count = -1){
    var startBtn = document.createElement('button');
    startBtn.innerHTML = 'start';
    startBtn.classList.add('button');
    buttonContainer.appendChild(startBtn);
    startBtn.onclick = function() {
        count++;
        clickEvent();
        startGame();
    }
}
function startGame(){
    buttonContainer.removeChild(startBtn);
    for(let i = 0; i < buttons.length; i++)
    {
        let btn = document.createElement('button');
        btn.innerHTML = buttons[i];
        btn.classList.add('button');
        buttonContainer.appendChild(btn);
        btn.onclick = clickEvent;
    }
}
function clickEvent(){
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;
    count++
}