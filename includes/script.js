// Creating variables

let count = -1;
const bigparties = 15;

const title = document.getElementById('question');
const buttonContainer = document.getElementById('button-container');
const statementParagraph = document.getElementById('statement');
const backButton = document.getElementById('back-arrow');
const resultContainer = document.getElementById('result-container');
const changeWeightContainer = document.getElementById('changeweight-container');
const weightedQuestionsContainer = document.getElementById('weighted-questions-container');
const changeWeightButton = document.getElementById('changeWeight');
const bigPartyContainer = document.getElementById('big-party-container');
const bigPartyCheckbox = document.getElementById('big-party-checkbox');

let buttons = [
    ['Eens', `pro`] ,
    ['Geen van beide', `none`],
    ['Oneens', `contra`],
    ['Overslaan', 'skip'],
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
    startGame(startBtn);
}

// Start game function

function startGame(startBtn){
        startBtn.onclick = function() {
            let placeholder = 3;
            subStep(placeholder, count);
            startQuestions();
        }
    }

// Starts the quiz and appends the buttons to the container

function startQuestions(sessionChoices){
    changeWeightContainer.style.display = 'none';
    bigPartyContainer.style.display = 'none';
    let sessionCount = 1;
    buttonContainer.innerHTML = '';
        for(let i = 0; i < buttons.length; i++)
        {
            let btn = makeButton(i); 
            btn.onclick = function () {
                position = btn.value;
                pushPositionInArray(position); 
                subStep(btn);
                if(typeof sessionChoices !== 'undefined'){
                    for(o = 0; o < buttonContainer.children.length; o++){
                        let button = buttonContainer.children[o];
                        if(button.value == sessionChoices[sessionCount]){
                            button.classList.add('blue');
                        }
                    }
                    sessionCount++;
                };    
        }   

    }
    if(typeof sessionChoices !== 'undefined'){
        if(sessionCount == 1){
            for(o = 0; o < buttons.length; o++){
                let button = buttonContainer.children[o];
            if(buttons[o][1] == sessionChoices[1]){
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
    if(count == 0){
        backButton.classList.remove('hidden');
    }
    clickEvent();
}

// Performs the click event

function clickEvent(){
    if(count == subjects.length ){
        finalCount(choices);
        displayResultsSubstep(points);
        return;
    };
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;    
    let button = document.getElementsByClassName('button');
    for(i = 0; i < button.length; i++){
        button[i].classList.remove('blue');
    }
}

// Makes a button

function makeButton(i){
    let btn = document.createElement('button');
    btn.innerHTML = buttons[i][0];
    btn.classList.add(buttons[i][1]);
    btn.value = buttons[i][1];
    btn.classList.add('button');
    buttonContainer.appendChild(btn);
    return btn;
}

// This function performs the go back event

function backButtonClick(){
    count--;
    if(count < 0){
        buttonContainer.innerHTML = '';
        let startBtn = createStartButton();
        backButton.classList.add('hidden');
        question.innerHTML = 'Tweede kamer verkiezingen 2021';
        statementParagraph.innerHTML = 'welkom bij de stemwijzer';
            startGame(startBtn);
        return;
    }
    if(count == subjects.length - 1  ){
        resultContainer.innerHTML = '';
        buttonContainer.innerHTML = '';
        changeWeightContainer.style.display = 'none';
        for(i = 0; i < buttons.length; i++){
            let btn = makeButton(i);
            btn.onclick = function () {
                position = btn.value;
                pushPositionInArray(position); 
                subStep(i);
        }   
        }
    }
    for(i = 0; i < buttonContainer.children.length; i ++){
        let btn = buttonContainer.childNodes[i];
        btn.classList.remove('blue');
        if(btn.value == choices[count]){
            btn.classList.add('blue');
        }
    }
    choices.pop();
    title.innerHTML = subjects[count].title;
    statement.innerHTML = subjects[count].statement;
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

let choices = [];
function pushPositionInArray(position){
    choices.push(position);
}

// make sessionchoices

function makeSessionChoices(){
    let sessionChoices = [];
    sessionChoices = choices;
    return sessionChoices;
}

// Makes array of seculair of not seculair 

SecularAndSeats = [];

for(i = 0; i < parties.length; i++){
    SecularAndSeats[i] = [parties[i]['name'], parties[i]['secular'], parties[i]['size']];    
    SecularAndSeats.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
});
}
SecularAndSeats = SecularAndSeats.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
  .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
  .reverse().map(JSON.parse) // revert it to original state

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
                    if(weightedQuestionsArr[i] == true){
                        points[o][1]++;
                        points[o][1]++;
                    } else{
                    points[o][1]++;
                    }
                        }
                   }
        }
    
}

// Displays seculair and non seculair parties

function displayResultsSubstep(){
    changeWeightContainer.style.display = 'flex';
    title.innerHTML = 'Selecteer welke partijen je toont';
    statementParagraph.innerHTML = '';
    buttonContainer.innerHTML = '';
    let button = document.createElement('button');
    let dropdown = document.createElement('select');
    buttonContainer.appendChild(dropdown);
    let optionsArray= [
        ['alles', 'all'],
        ['seculair', true],
        ['niet seculair', false]
    ];
    for(i = 0; i < optionsArray.length; i++){
        let option = document.createElement('option');
        option.value = optionsArray[i][1];
        option.innerHTML = optionsArray[i][0];
        dropdown.appendChild(option);
    }

    buttonContainer.appendChild(button);
    button.classList.add('button');
    button.innerHTML = 'Ga naar results screen';
    button.onclick = function(){
        let selectedOption = dropdown.options[dropdown.selectedIndex].value;
        displayResults(points, selectedOption);
    }
}

// Displays the result screen

function displayResults(points, selectedOption){
        changeWeightContainer.style.display = 'none';
        title.innerHTML = 'Resulaten';
        statementParagraph.innerHTML = '';
        buttonContainer.innerHTML = '';
        points.sort((function(index){
            return function(a, b){
                return (a[index] === b[index] ? 0 : (a[index] < b[index] ? 1 : -1));
            };
        })(1));
            for(o = 0; o < points.length; o++){
            if(points[o][1] > points[0][1] / 3){
                if(bigPartyCheckbox.checked == true){
                    if(SecularAndSeats[o][2] >= bigparties){
                        displayResultsBars(points,selectedOption);
                    }
            } else {
                displayResultsBars(points,selectedOption);
            }
        }
    }
}
function createResultsBar(){
    let result = document.createElement('div');
    let width = points[o][1] / points[0][1] * 100;
    result.style.width = width + '%'; 
    result.innerHTML = points[o][0] + ': ' + points[o][1]; 
    resultContainer.appendChild(result);
}
function displayResultsBars(points, selectedOption){
    if(selectedOption == 'all'){
        createResultsBar(points);
        } else{
            if(selectedOption == SecularAndSeats[o][1].toString()){
                createResultsBar(points);
            }
        }
}

// Weight of questions

changeWeightButton.onclick = function(){
    changeWeight();
}
function changeWeight(){
    changeWeightButton.style.display = 'none';
    for(i = 0; i < subjects.length; i++){
        let question;
        let input;
        question = document.createElement('div');
        question.innerHTML = subjects[i]['title'];
        question.classList.add('weightQuestion');
        input = document.createElement('input');
        input.type = 'checkbox';
        question.appendChild(input);
        input.classList.add('checkbox')
        weightedQuestionsContainer.appendChild(question);
    }
    let button = document.createElement('button');
    changeWeightContainer.appendChild(button);
    button.classList.add('button');
    button.innerHTML = 'Sla gewicht op';
    button.onclick = function(){
        changeWeightOfQuestions();
        changeWeightContainer.removeChild(button);
    }
}

let weightedQuestionsArr = [false];

function changeWeightOfQuestions(){
    let checkboxes = document.getElementsByClassName('checkbox');
    for(i = 0; i < checkboxes.length; i++){
        let checkbox = checkboxes[i];
        if(checkbox.checked){
            weightedQuestionsArr.push(true);
        } else {
            weightedQuestionsArr.push(false);
        }
    }
    let button = document.createElement('button');
    changeWeightContainer.appendChild(button);
    button.innerHTML = 'Verander gewicht van de vragen';
    button.classList.add('button');
    button.setAttribute("id", 'changeWeight');
    weightedQuestionsContainer.innerHTML = '';
    console.table(weightedQuestionsArr);
    button.onclick = function (){
        changeWeight();
        changeWeightContainer.removeChild(button);
    }


};