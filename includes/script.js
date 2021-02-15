// Creating variables

let count = -1;

const title = document.getElementById('question');
const buttonContainer = document.getElementById('button-container');
const statementParagraph = document.getElementById('statement');
const backButton = document.getElementById('back-arrow');
const homeScreenButton = document.getElementById('homescreen-button')

let buttons = [
    ['eens', `pro`] ,
    ['neutraal / niet zeker', `none`],
    ['oneens', `contra`],
    ['skip', `placeholder`],
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
    startGame();
}

// Start game function

function startGame(){

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
            btn.innerHTML = buttons[i][0];
            btn.value = buttons[i][1];
            btn.classList.add('button');
            buttonContainer.appendChild(btn);
            btn.onclick = function () {
                position = btn.value;
                subStep(i);
                CountParty(position); 
        }
    }
}

// Adds a function to perform code between steps

function subStep(i){
    count++

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
    count = -1;  
    title.innerHTML = 'Stemwijzer';
    statementParagraph.innerHTML = 'Welkom bij de stemwijzer';
    for(let i = 0; i < 4; i++){
        buttonContainer.innerHTML = ``;
    }
    startBtn = createStartButton();
    startGame();
}

// Make points array

let points = [];
for(i = 0; i < subjects[0][`parties`].length; i++){
    points[i] = [subjects[0][`parties`][i][`name`], 0];
}

// Count party


function CountParty(position){
    // console.log(position);
    for(i = 0; i < subjects[0][`parties`].length; i++){
        console.table(subjects[count][`parties`][i][`position`])

        if(subjects[count][`parties`][i][`position`] === position){
            console.log(true);  
            points[i][1]++;
        }

    }
    // console.table(subjects[count][`parties`])
        // console.table(points);
    // console.log(subjects);
    // console.log(subjects[][`parties`][i][`position`]);
}