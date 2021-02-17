// Creating variables

let count = -1;

const title = document.getElementById('question');
const buttonContainer = document.getElementById('button-container');
const statementParagraph = document.getElementById('statement');
const backButton = document.getElementById('back-arrow');
const homeScreenButton = document.getElementById('homescreen-button');
const resultContainer = document.getElementById('result-container');
const changeWeightContainer = document.getElementById('changeweight-container');
const changeWeightButton = document.getElementById('changeWeight');

let buttons = [
    ['eens', `pro`] ,
    ['neutraal / niet zeker', `none`],
    ['oneens', `contra`],
    ['skip', 'skip'],
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

function startGame(sessionChoices){
        startBtn.onclick = function() {
            homeScreenButton.classList.remove('hidden');
            let placeholder = 3;
            subStep(placeholder, count);
            Quiz(sessionChoices);
        }
    }

// Starts the quiz and appends the buttons to the container

function Quiz(sessionChoices){
    let sessionCount = 1;
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
                pushPositionInArray(position); 
                subStep(btn);
                if(typeof sessionChoices !== 'undefined'){
                    for(o = 0; o < buttons.length; o++){
                        let button = buttonContainer.children[o];
                        if(button.value == sessionChoices[sessionCount]){
                            // console.log(sessionChoices[sessionCount]);
                            button  .classList.add('blue');
                        }
                    }
                    sessionCount++;
                };    
        }   

    }
    if(typeof sessionChoices !== 'undefined'){
        if(sessionCount == 1){
            for(o = 0; o < buttons.length; o++){
                console.log(buttons.length);
                let button = buttonContainer.children[o];
            if(buttons[o][1] == sessionChoices[1]){
                console.log(true);
                button.classList.add('blue');
            }
        }
            sessionCount++;
        }
    }
    backButton.onclick = function (){
        backButtonClick();
    }
}

// Adds a function to perform code between steps

function subStep(btn){
    count++
    if(count == 1){
        backButton.classList.remove('hidden');
    }
    clickEvent();
}

// Performs the click event

function clickEvent(){
    if(count == 5){
        finalCount(choices);
        displayResults(choices, points);
        return;
    };
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;    
    let button = document.getElementsByClassName('button');
    for(i = 0; i < button.length; i++){
        button[i].classList.remove('blue');
        console.log('1');
    }
}

// This function performs the go back event

function backButtonClick(){
    count--;
    if(count < 1){
        backButton.classList.add('hidden');
    }
    if(count == 4){
        resultContainer.innerHTML = '';
        buttonContainer.innerHTML = '';
        for(i = 0; i < buttons.length; i++){
            let btn = document.createElement('button');
            btn.innerHTML = buttons[i][0];
            btn.value = buttons[i][1];
            btn.classList.add('button');
            buttonContainer.appendChild(btn);
            btn.onclick = function () {
                position = btn.value;
                pushPositionInArray(position); 
                subStep(i);
        }   
        }
    }
    choices.pop();
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;
}

// Goes back to homescreen

homeScreenButton.onclick = function(){
    sessionChoices = makeSessionChoices();
    choices = [NaN];
    backButton.classList.add('hidden');
    points = makePointsArray();
    homeScreenButton.classList.add('hidden');
    resultContainer.innerHTML = ''
    count = -1;  
    title.innerHTML = 'Stemwijzer';
    statementParagraph.innerHTML = 'Welkom bij de stemwijzer';
    for(let i = 0; i < 4; i++){
        buttonContainer.innerHTML = ``;
    }
    startBtn = createStartButton();
    startGame(sessionChoices);
}

// Make points array

function makePointsArray(){
let points = [];
for(i = 0; i < subjects[0][`parties`].length; i++){
    points[i] = [subjects[0][`parties`][i][`name`], 0];
}
points.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
});
    return points;
}

// Pushes answers in array

let choices = [NaN];
function pushPositionInArray(position){
    choices.push(position);
}

// make sessionchoices

function makeSessionChoices(){
    let sessionChoices = [];
    sessionChoices = choices;
    return sessionChoices;
}

// Counts the party

function finalCount(choices){
    points = makePointsArray();
    let o = 0;
    let sortedSubjects = [];
    for(o = 0; o < choices.length; o++){
        sortedSubjects[o] = [];
        for(i = 0 ; i < subjects[0]['parties'].length; i++){
            sortedSubjects[o][i] = [subjects[o]['parties'][i]['name'], subjects[o]['parties'][i]['position']];
        }
        sortedSubjects[o].sort(function (a, b) {
            if (a > b) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            return 0;
        });
    }   
    for(i = 0; i < choices.length; i++){
            for(o = 0; o < subjects[i]['parties'].length; o++ ){
                if(sortedSubjects[i][o][1] == choices[i]){
                    points[o][1]++;
                        }
                   }
        }
    
}

// Displays the result screen

function displayResults(choices, points){
    title.innerHTML = 'Resulaten';
    statementParagraph.innerHTML = '';
    buttonContainer.innerHTML = '';
    points.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? 1 : -1));
        };
    })(1));
        for(o = 0; o < points.length; o++){
        if(points[o][1] > choices.length / 3){
            let result = document.createElement('div');
            let width = points[o][1] / choices.length * 100;
            result.style.width = width + '%'; 
            result.innerHTML = points[o][0] + ': ' + points[o][1]; 
            resultContainer.appendChild(result);

        }
    }
}

// Weight of questions

changeWeightButton.onclick = function(){
    changeWeightOfQuestions();
}

function changeWeightOfQuestions(){
    
    for(i = 0; i < subjects.length; i++){
        question = document.createElement('div');
        question.innerHTML = subjects[i]['title'];
        changeWeightContainer.appendChild(question);
    }
};