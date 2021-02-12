// Creating variables

let count = -1;

const title = document.getElementById('question');
const buttonContainer = document.getElementById('button-container');
const statementParagraph = document.getElementById('statement');
const backButton = document.getElementById('back-arrow');
const homeScreenButton = document.getElementById('homescreen-button')

let buttons = [
    'eens',
    'neutraal / niet zeker',
    'oneens',
    'skip',
]

// create startButton

function createStartButton(){
    let startBtn = document.createElement('button');
    startBtn.innerHTML = 'start';
    startBtn.classList.add('button');
    buttonContainer.appendChild(startBtn);
    return startBtn;
}
// Laying out the start screen

if(count = -1){
    startBtn = createStartButton();
    startBtn.onclick = function() {
        homeScreenButton.classList.remove('hidden');
        let placeholder = 3;
        subStep(placeholder, count);
        Quiz();
    }
}


// Starts the quiz and appends the buttons to the container

function Quiz(){
    buttonContainer.removeChild(startBtn);
        for(let i = 0; i < buttons.length; i++)
        {
            let btn = document.createElement('button');
            btn.innerHTML = buttons[i];
            btn.classList.add('button');
            buttonContainer.appendChild(btn);
            btn.onclick = function () {
                subStep(i); 
        }
    }
}


// Adds a function to perform code between steps

function subStep(i){
    count++
    console.log(count)

    if(count == 1){
        backButton.classList.remove('hidden');
    }
    clickEvent(i);
}


// Performs the click event

function clickEvent(i){
    switch(i){
        case 0:
        
        break;
        case 1:
            
        break;
        case 2:

        break;
        case 3:
        break;
    }
    if(count == subjects.length){
        getResults();
        return;
    };
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;    
}

// This function performs the go back event

backButton.onclick = function(){
    count--;
    if(count < 1){
        backButton.classList.add('hidden');
    }
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;
}

// Gets and displays the results

function getResults(){
    for(i = 0; i < buttons.length; i++){
    buttonContainer.removeChild(buttonContainer.childNodes[0]);
    }
}

// Goes back to homescreen

homeScreenButton.onclick = function(){
    homeScreenButton.classList.add('hidden');
    count = 0;  
    title.innerHTML = 'Stemwijzer';
    statementParagraph.innerHTML = 'Welkom bij de stemwijzer';
    for(i = 0; i < buttons.length; i++){
        console.log(i);
        buttonContainer.removeChild(buttonContainer.childNodes[0]);
    }
}
